import {app} from "./App";
import { log } from "./App/Utils/Logger";
const port = process.env.Port

const startServer =async (): Promise<void> => {
  try{
    app.listen(port, ()=> {
      log.info(`Server is running on port ${port}`)
    })
  } catch(err: any){
      log.error(err.message)
  }
}

startServer()