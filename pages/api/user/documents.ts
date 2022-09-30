import * as dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'
import executeQuery from "../../../lib/db";
dotenv.config()



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {

        case "GET":


            break;


        case "POST":
            
            break;
    }


}