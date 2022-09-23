import * as dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'
import executeQuery from "../../../lib/db";
import {mysqlQuery} from "../../../interface";
dotenv.config()
console.log(process.env.Username)



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch(req.method) {
        case "POST":

            const {Username, Password} = req.body;
            console.log("wow")
            console.log("wow")
            try {
                await executeQuery({query:"INSERT INTO `user-info` (username, password) VALUES (?, ?)",values:[Username,Password]}).then(x => {
                    res.status(200).json(x)
                });
            }
            catch {
                res.status(204).send("bad");
            }

            break

        case "get":


            break;
    }
    console.log("xd",req.method)
}
