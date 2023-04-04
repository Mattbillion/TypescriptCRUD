import express, { Request, Response } from "express";
import Movies from "../model/Movies";

const getMovies = express.Router();

getMovies.get("/movies", async (req: Request, res: Response) => {
  const myQuery = Movies.find({ title: "The Great Train Robbery" })
  const result = await myQuery.exec();
  console.log(result)
  res.status(201).send([{
    title: result[0].title,
    poster: result[0].poster
  }])
});


export default getMovies;
