 require('dotenv').config()

import "reflect-metadata"

import express from "express"
import session from "express-session" 
import cors from "cors"
import { createClient } from "redis"

import {ApolloServer} from "apollo-server-express"
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import {DataSource } from "typeorm"
import { buildSchema } from "type-graphql"

import { HelloResolver } from "./resolvers/hello"


const main = async () => {

    console.log("Hello world")

}

main().catch(error => {
    console.log(error)
})