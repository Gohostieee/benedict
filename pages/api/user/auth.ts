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

            let pass = false;
            try {

                const {Username, Password,Email} = req.body;

                await executeQuery({query:"select * from `user-info` where email = ?",values:[Email]}).then(async x => {
                    console.log(x)

                    // @ts-ignore
                    if(x[0]?.length > 0) {
                        res.status(201).json({accepted:false,reason:"email taken"})
                        return;
                    }
                    pass = true;
                })
                if(pass) {

                    await executeQuery({query:"INSERT INTO `user-info` (username, password, email) VALUES (?, ?, ?)",values:[Username,Password,Email]}).then(x => {
                        res.status(200).json({accepted:true})
                    });
                }

                return;

            }
            catch (x) {
                console.log(x)
                res.status(204).send("bad");
            }

            break

        case "GET":
            const {Password,Email} = req.query;
            console.log(Password,Email)
            await executeQuery({query:"SELECT username, bio, email FROM `user-info` WHERE email = ? AND password = ?",values:[Email,Password]}).then(x => {
                // @ts-ignore

                if(x[0]?.length > 0) {
                    // @ts-ignore
                    res.status(200).json({login:true,Username:x[0][0].username,Bio:x[0][0].bio,Email:Email,Password:Password});

                } else {
                    res.status(204).json({accepted:false})
                }
            })

            break;
    }
    console.log("xd",req.method)
}
