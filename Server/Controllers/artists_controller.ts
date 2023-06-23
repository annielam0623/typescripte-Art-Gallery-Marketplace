const artists = require("express").Router()
import Artist from '../Models/artist'
const artistSeedData = require('../Seeders/artist_data')
import { Request, Response } from 'express';

//FIND ALL ARTISTS
artists.get('/', async (req: Request, res: Response) => {
    try{
        const foundArtists = await Artist.find()
            .populate({ path : 'artworks', options: { limit: 5 } })
        res.json(foundArtists)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//SEED DATA
//will be removed for final implementation
artists.get('/seed', async (req: Request, res: Response) => {
    try {
        await Artist.insertMany(artistSeedData)
        res.status(201).json({ message: 'Seeded data successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'request failed' })
    }
})

//FIND SPECIFIC ARTIST
artists.get('/:id', async (req: Request, res: Response) => {
    try {
        const foundArtist = await Artist.findById(req.params.id)
            .populate('artworks')
            .populate('commissions')
        res.status(200).json(foundArtist)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//CREATE ARTIST
artists.post('/', async (req: Request, res: Response) => {
    try {
        const newArtist = await Artist.create(req.body)
        res.status(201).json({
            message: 'Successfully insert a new artist',
            data: newArtist
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

//UPDATE ARTIST INFORMATION
artists.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({ 
            message: 'Successfully updated Artist',
            data: updatedArtist
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//DELETE AN ARTIST
artists.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted artist`,
            data: deletedArtist
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error'})
    }
})

//exports 
export default artists;