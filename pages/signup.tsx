import {NextPage} from "next";
import Head from "next/head";
import * as React from "react"
import axios from "axios";
import {mysqlQuery} from "../interface";
import {MutableRefObject, useRef, useState} from "react";
import {userData} from "../interface";
import {EmailValid, PasswordValid, UsernameValid} from "../lib/authfuncs";
import Link from "next/link";
const Signup:NextPage = () => {
    const [error,useError] = useState("")
    const Email = useRef<HTMLInputElement>(null);
    const Password = useRef<HTMLInputElement>(null);
    const Username = useRef<HTMLInputElement>(null);
    const SetError = (x:string) =>{
        useError(x)
    }
    const SubmitUser = async () => {
        let error:string = "";
        const UsernameVal = Username.current?.value
        const PasswordVal = Password.current?.value
        const EmailValue = Email.current?.value
        try {
            switch (UsernameValid(UsernameVal)) {
                case 0:
                    error = ""
                    break;
                case 1:
                    error = "Username empty!"
                    break;
            }
            if(error != "") {
                throw "error";
            }
    
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
            if (error === "") {
                await axios({url:"/api/user/auth",method:"post",data:{Username:UsernameVal,Email:EmailValue,Password:PasswordVal}}).then(x => {
                    switch(x.status) {
                        case 200:
                                 console.log(x.data)
                                 localStorage.setItem("user",JSON.stringify({Username:UsernameVal,Email:EmailValue,Password:PasswordVal,login:true}));
                                 error = "";
                                 window.location.href="/account"
                            break;
                        case 201:
                            error = "Email has been taken"
                            break;
                        case 204:
                                 error = "unknown error, contact me about this"
                            break;
         
                    }
                })
            }
        }
        useError(error);
        
        
        
       

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
                    <h1 className={"text-2xl text-white text-center font-bold mt-4 text-3xl"}>Signup</h1>
                    <div className={"m-auto w-[50%]"}>
                        <p className={"text-white font-light text-xl"}>Username</p>
                        <input ref = {Username} className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "name"/>
                    </div>
                    <div className={"m-auto w-[50%]"}>
                        <p className={"text-white font-light text-xl"}>Email</p>
                        <input ref = {Email} className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "email"/>
                    </div>
                    <div className={"m-auto w-[50%]"}>
                        <p className={"text-white font-light text-xl"}>Password</p>
                        <input ref = {Password} className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "password" />
                    </div>
                    <div className={"m-auto w-[50%] "}>
                        <p className={"text-lg underline text-rose-700 text-center"}>{error}</p>
                        <Link href={"login"} className={"text-emerald-700 block text-center underline text-lg underline-offset-2 mb-2"}>Already have an account?</Link>
                        <button onClick = {SubmitUser} className={"border bg-transparent w-[100%] m-auto h-16 text-white text-3xl font-bold hover:bg-rose-900 hover:font-thin hover:text-2xl transition-all"}>Signup</button>

                    </div>
                </div>
            </main>
        </>
    )
}
export default Signup;