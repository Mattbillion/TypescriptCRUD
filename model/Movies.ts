import mongoose, { Schema, model } from "mongoose"

interface IMovies {
  title: string,
  poster: string,
}

const movieSchema = new Schema<IMovies>({
  title: {type: String, required: true},
  poster: {type: String, required: true},
})

const Movies = model <IMovies>("Movies", movieSchema)

export default Movies


