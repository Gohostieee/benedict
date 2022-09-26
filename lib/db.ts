    import mysql from 'mysql2';
import {mysqlQuery} from "../interface";
    const conn = process.env.DATABASE_URL;
    if (conn=== undefined){
        throw "sql uri missing"
    }
    const connection = mysql.createConnection(conn)
    console.log('Connected to PlanetScale!')

export default async function executeQuery({ query, values }:mysqlQuery) {
    try {
        return await connection.promise().query(query, values);
    } catch (error) {
        return { error };
    }
}