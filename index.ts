import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import getMovies from './Routes/movieAPI';
import cors from "cors";

// const express = require("express");
// const dotenv = require("dotenv");


dotenv.config();

const app: Express = express()
const port = process.env.PORT;
const DATA_CONN: string = process.env.DB_CONN_STRING!;


mongoose
  .connect(DATA_CONN)
  .then(() => {
    console.log("Database connected :)")
  })
  .catch((err) => {
    console.error("something went wrong")
  })
app.use(cors())
app.use(express.json())
app.use(getMovies);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
