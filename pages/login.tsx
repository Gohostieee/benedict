import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useRef, useState} from "react";
import {EmailValid, PasswordValid, UsernameValid} from "../lib/authfuncs";
import * as React from "react";
import axios from "axios";

const Login:NextPage = () => {



    const [error,useError] = useState("");

    const SetError = (x:string) =>{
        useError(x)
    }
    
    const Email = useRef<HTMLInputElement>(null),Password = useRef<HTMLInputElement>(null);
    const SubmitUser = async () => {
        let error:string = "";
        const PasswordVal = Password.current?.value
        const EmailValue = Email.current?.value
        try {
            switch(PasswordValid(PasswordVal)) {
                case 0:
                    error = "";
                    break
                case 1:
                    error = "Password empty!"
                    break;
                case 2:
                    error = "Password needs to be at least 4 characters long"
                    break;
            }
            if(error != "") {
                throw "error";
            }
            switch (EmailValid(EmailValue)){
                case false:
                    error = ""
                    break;
                case true:
                    error = "Email is not valid"
                    break;
    
                case 2:
                    error = "Email is empty"
                    break;
            }
            if(error != "") {
                throw "error";
            }
        } finally {
            if(error === "") {
                await axios({url:`/api/user/auth?Email=${EmailValue}&Password=${PasswordVal}`,method:"get",data:{Email:EmailValue,Password:PasswordVal}}).then( x => {
                    switch (x.status) {
                        case 200:
                            localStorage.setItem("user",JSON.stringify({login:true,Email:EmailValue,Password:PasswordVal}));
                            window.location.href = "/account"
                            error = ""
                            break;
                        default:
                            error = "Unknown error, contact me about this."
                            break;
                    }
                })
            }
        }
        useError(error)
        

        
    }

    return(
        <>
            <Head>
                <title>Create Next pp</title>
                <meta name="description" content="Generateby create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='absolute overflow-hidden h-[100vh] top-0 w-[99vw]'>
                <div className='h-[300vh] bgwave opacity-100 w-[200%] absolute inline top-0  overflow-hidden opacity-60'/>

            </div>
            <main className={"z-10 relative flex flex-col h-[100vh] justify-center"}>

                <div className={"w-[500px] h-[500px] border bg-black bg-opacity-80 m-auto flex flex-col"}>
                    <h1 className={"text-2xl text-white text-center font-bold mt-4 text-3xl"}>Login</h1>

                    <div className={"m-auto w-[50%]"}>
                        <p className={"text-white font-light text-xl"}>Email</p>
                        <input ref = {Email} className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "Email"/>
                    </div>
                    <div className={"m-auto w-[50%]"}>
                        <p className={"text-white font-light text-xl"}>Password</p>
                        <input ref = {Password} className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "password" />
                    </div>
                    <div className={"m-auto w-[50%] "}>
                        <p className={"text-lg underline text-rose-700 text-center"}>{error}</p>

                        <Link href={"signup"} className={"text-emerald-700 block text-center underline text-lg underline-offset-2 mb-2"}>{`Don't have an account?`}</Link>
                        <button onClick = {SubmitUser} className={"border bg-transparent w-[100%] m-auto h-16 text-white text-3xl font-bold hover:bg-rose-900 hover:font-thin hover:text-2xl transition-all"}>Login</button>

                    </div>
                </div>
            </main>
        </>
    )
}
export default Login;