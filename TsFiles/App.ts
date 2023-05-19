
import express, { Application } from "express";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
import { dbConnect } from "./App/Utils/dbConnect";
dotenv.config()
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// db connect 
dbConnect()
// will import all routes here
// here will be default route
// custom routes path

export {app}