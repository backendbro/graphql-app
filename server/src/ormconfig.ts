import { DataSource } from "typeorm"
import path from "path"


const AppDataSource = new DataSource({
    type:"postgres", 
    database:"", 
    username:"", 
    password:"", 
    logging:true, 
    synchronize:true, 
    migrations:[path.join(__dirname, "./migrations/*")],
    entities: [path.join(__dirname, "./entities/*")]   
}) 


module.exports = {
    datasource: AppDataSource
  }