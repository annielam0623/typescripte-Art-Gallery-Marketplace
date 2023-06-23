import mongoose, { Document, Schema } from 'mongoose';
import Artwork from './artwork';
import Commission from './commission';

interface ArtistDocument extends Document {
  name: string;
  phone: string;
  email: string;
  image?: string;
  style: string;
  bio: string;
}

const artistSchema = new Schema<ArtistDocument>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    image: String,
    style: { type: String, required: true },
    bio: { type: String, required: true },
  },
  { toJSON: { virtuals: true } }
);

artistSchema.virtual('artworks', {
  ref: 'Artwork',
  localField: '_id',
  foreignField: 'artist',
});

artistSchema.virtual('commissions', {
  ref: 'Commission',
  localField: '_id',
  foreignField: 'artist',
});

artistSchema.post('findOneAndDelete', function (doc) {
  if (doc) {
    Artwork.deleteMany({ artist: doc._id })
      .then((status) => console.log(status))
      .catch((error) => console.error('Error deleting associated artworks:', error));
  }
});

const Artist = mongoose.model<ArtistDocument>('Artist', artistSchema);
export default Artist;
