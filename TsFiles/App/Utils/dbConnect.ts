import mongoose from "mongoose";
import { log } from "./Logger";
import dotenv from "dotenv"
dotenv.config()

const URL = process.env.URL

const dbConnect =async () : Promise <void> => {
    try{
        if(!URL){
            log.error("No url found in Env file");
            process.exit(1)
        }
        await mongoose.connect(URL)
        log.info("Database connected")

    }catch(err: any){
        log.error(err.message)
    }
}

export {dbConnect}