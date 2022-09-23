    import mysql from 'mysql2';
import {mysqlQuery} from "../interface";

    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')

export default async function executeQuery({ query, values }:mysqlQuery) {
    try {
        const results = await connection.query(query, values);
        await connection.end();
        return results;
    } catch (error) {
        return { error };
    }
}