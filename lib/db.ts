import mysql from 'mysql2';
import {firebaseFileQuery, mysqlQuery} from "../interface";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCde2rUe5Sy4G9EAYWgPeazJa7jOm57JDs",

    authDomain: "muttley-a04c8.firebaseapp.com",

    projectId: "muttley-a04c8",

    storageBucket: "muttley-a04c8.appspot.com",

    messagingSenderId: "583819060590",

    appId: "1:583819060590:web:baed974cad4299fcaf4d7f",

    measurementId: "G-9LZPTQ3C7K"

  };
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
  
    const conn = process.env.DATABASE_URL;
    console.log(process.env.DATABASE_URL,"wow")
    if (conn=== undefined){
        throw "sql uri missing"
    }
    const connection = mysql.createConnection(conn)
    console.log('Connected to PlanetScale!')

export async function uploadFile({location,data}:firebaseFileQuery) {
    const documentRef = ref(storage,location);

    try {
        return await uploadBytes(documentRef,data);
    } catch (error) {
        return { error };
    }
}
export default async function executeQuery({ query, values }:mysqlQuery) {
    try {
        return await connection.promise().query(query, values);
    } catch (error) {
        return { error };
    }
}