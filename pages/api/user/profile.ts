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



            break

        case "GET":
            try {
                await executeQuery({query:"SELECT * FROM `user-info` WHERE name = ? ",values:[req.query.Username]}).then(x => {
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
