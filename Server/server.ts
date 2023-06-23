//modules and globals
require('dotenv').config()
const cors = require('cors');
const express = require('express');
import mongoose from 'mongoose'
import { Request, Response } from 'express';

const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI || '';

//configuration and middleware
app.use(cors({
    origin: '*', 
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

mongoose.set({strictQuery: true})

try {
    mongoose.connect(MONGO_URI);
    console.log('DATABASE CONNECTED');
} catch (err) {
    console.log(err)
}

//controllers and routes
import artistsController from './Controllers/artists_controller'
app.use('/artists', artistsController)

import artworksController from './Controllers/artworks_controller'
app.use('/artworks', artworksController)

import commissionsController from './Controllers/commissions_controller'
app.use('/commissions', commissionsController)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the Art-Mart API!' })
})

app.get('*', (req: Request, res: Response)=> {
    res.status(404).json({ message: 'endpoint data not found' })
})

//listening for connections
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT}`)
})

module.exports = app