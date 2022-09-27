import { StaticImageData } from "next/image"


export interface gridSelData {
   
        img:StaticImageData,
        name: string,
        href:string
    
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
export interface userDetails {
        name:string,
        bio:string
}