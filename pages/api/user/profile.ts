import * as dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'
import executeQuery from "../../../lib/db";
import {mysqlQuery} from "../../../interface";
dotenv.config()



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    switch(req.method) {
        case "POST":
            const {email,password,bio,name} = req.body;
            await executeQuery({query:"UPDATE `user-info` SET username = ?, bio = ? WHERE email = ? and password = ?",values:[name,bio,email,password]}).then(x => {
                console.log(x,{query:"UPDATE `user-info` SET username = ?, bio = ? WHERE email = ? and password = ?",values:[name,bio,email,password]})
                res.status(200).send("uwu")
            })


            break

        case "GET":
            try {
                console.log({query: "SELECT * FROM `user-info` WHERE email = ? ", values: [req.query.Email]})
                await executeQuery({query:"SELECT * FROM `user-info` WHERE email = ? ",values:[req.query.Email]}).then(x => {
                    // @ts-ignore
                    if(x[0]?.length > 0) {
                        // @ts-ignore
                        res.status(200).json(x[0][0])
                    }
                    else {
                        res.status(201).send("User not found");
                    }
                })
            }

            catch (x) {
                res.status(400).send("unknown error");
            }

            break;
    }
    console.log("xd",req.method)
}
