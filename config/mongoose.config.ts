import mongoose from "mongoose";
import * as dotenv from "dotenv"

const port = process.env.DB_CONN_STRING;

mongoose
  .connect(port, {
    useCreateIndex: true,
    newNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("connected to DATABASE!")
  })