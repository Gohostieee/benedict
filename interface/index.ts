import { StaticImageData } from "next/image"
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";


export interface gridSelData {
   
        img:StaticImageData,
        name: string,
        href:string
    
}
export interface dropdownData {
        name: string,
        data: JSX.Element
}
export interface img {
        src:string,
        width:Number,
        height:Number
}
export interface userData {

        name:string,
        password:string
}
export interface mysqlQuery {
        query:string,
        values:any[]
}
export interface firebaseFileQuery {
        location:string,
        data:Uint8Array
}
export interface userDetails {
        name:string,
        bio:string
}