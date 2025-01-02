import {ExpressContext } from "apollo-server-express"
import { DataSource } from "typeorm";

export type MyContext = {
    req: ExpressContext['req'];
    res: ExpressContext['res'];
    dataSource:DataSource, 
}
