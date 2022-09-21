import {NextPage} from "next";
import Head from "next/head";


const Login:NextPage = () => {


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
                        <p className={"text-white font-light text-xl"}>Username</p>
                        <input className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "name"/>
                    </div>
                    <div className={"m-auto w-[50%]"}>
                        <p className={"text-white font-light text-xl"}>Password</p>
                        <input className={"h-16 m-auto bg-transparent border-b outline-0 focus:border-red-600 focus:h-12 focus:text-xl focus:font-bold transition-all text-white text-2xl font-thin"} placeholder = "password" />
                    </div>
                    <div className={"m-auto w-[40%] "}>
                        <a href={"signup"} className={"text-emerald-700 block text-center underline text-lg underline-offset-2 mb-2"}>Don't have an account?</a>
                        <button className={"border bg-transparent w-[100%] m-auto h-16 text-white text-3xl font-bold hover:bg-rose-900 hover:font-thin hover:text-2xl transition-all"}>Login</button>

                    </div>
                </div>
            </main>
        </>
    )
}
export default Login;