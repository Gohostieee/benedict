import {NextPage} from "next";
import {useEffect, useRef, useState} from "react";
import {userData} from "../interface";
import lain from "../img/lain.png"
import Head from "next/head";
import axios from "axios";
import GridSelect from "../components/gridselect";

const Account: NextPage = () => {
    const [contentEdit,useContentEdit] = useState({Username: false, Bio: false});
    const bio = useRef<HTMLParagraphElement>()
    const [user, useUser] = useState({name: "", password: "", login: false});
    const SetUser = (x: Function, y: userData) => {
        x(y)
    }
    const Edit = (x:"Username" | "Bio" | "Cancel") => {
        switch(x){
            case "Username":
                useContentEdit({Username:true,Bio:false});

                break;

            case "Bio":
                useContentEdit({Username:false,Bio:true});

                break;
            case "Cancel":
                useContentEdit({Username:false,Bio:false})
        }
    }
    const GetInfo = async () => {
        await axios({url: `/api/user/profile?Username=${user.name}`, method: "get"}).then(x => {

        })

    }
    useEffect(() => {
        let tempData
        if (!user.login) {
            tempData = localStorage.getItem("user");
            if (tempData != null) {
                tempData = JSON.parse(tempData);
            } else {
                window.location.href = "/login"
            }
            SetUser(useUser, tempData)

        }
    }, [])

    useEffect(() => {
        if (user.login) {
        }
    }, [user])
    return (
        <>

            <div className='absolute overflow-hidden h-[100vh] w-[100vw]'>
                <div
                    className='h-[300vh] bgwave opacity-100 w-[200%] absolute inline top-0  overflow-hidden opacity-60'/>
            </div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="h-[100vh] z-[2] relative m-auto">
                <div className='w-[90vw] m-auto top-24 relative'>
                    <div className='flex justify-between '>
                        <h1 className='text-white text-8xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p pr-4 pl-4 border-red-500'>Benedict</h1>

                    </div>
                    <div className={"bg-black bg-opacity-90 border-2 mt-12 w-[100%]"}>
                        <div className={"w-[90%] ml-[5%]"}>
                            <div className={"flex mt-12 border-b pb-4"}>
                                <img src={lain.src} className={"w-[220px] p-4 border border-emerald-400 h-[220px]"}/>
                                <div className={"border-emerald-400 p-4 ml-7"}>
                                    {contentEdit.Username ?
                                        <p contentEditable={true} className={"text-violet-400 ml-4 text-4xl border-x pl-4 pr-4 cursor-pointer border-emerald-400 inline border-fuchsia-400 font-thin"}>BENEDICT</p>
                                        :
                                        <p contentEditable={false} className={"text-violet-400 ml-4 text-4xl border-b border-emerald-400 h-12 font-thin"}>BENEDICT</p>


                                    }
                                    {contentEdit.Bio ?
                                        <p contentEditable={true}
                                           className={"text-violet-400 ml-4 text-xl  text-justify mt-2 border border-fuchsia-400 p-4 min-h-12 cursor-pointer font-thin"}>Lorem
                                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap
                                            into electronic typesetting, remaining essentially unchanged. It was
                                            popularised in the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        :
                                        <p contentEditable={false}
                                           className={"text-violet-400 ml-4 text-xl  text-justify mt-2 font-thin"}>Lorem
                                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap
                                            into electronic typesetting, remaining essentially unchanged. It was
                                            popularised in the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                    }
                                    <div className={"flex w-[100%]"}>
                                        {!(contentEdit.Bio || contentEdit.Username) ?
                                            <>
                                                <button onClick={()=>{Edit("Bio")}}
                                                    className={"border font-thin text-2xl p-2 pl-4 pr-4 text-violet-400 hover:text-white hover:bg-violet-700 m-4 transition-colors"}>EDIT BIO</button>
                                                <button onClick={()=>{Edit("Username")}}
                                                    className={"border font-thin text-2xl p-2 pl-4 pr-4 text-violet-400 hover:text-white hover:bg-violet-700 m-4 transition-colors"}>EDIT NAME</button>
                                            </>
                                            :
                                            <>
                                                <button
                                                    className={"border font-thin text-2xl p-2 pl-4 pr-4 text-violet-400 hover:text-white hover:bg-violet-700 m-4 transition-colors"}>SAVE</button>
                                                <button onClick={()=>{Edit("Cancel")}}
                                                    className={"border font-thin text-2xl p-2 pl-4 pr-4 text-violet-400 hover:text-white hover:bg-violet-700 m-4 transition-colors"}>CANCEL</button>
                                            </>
                                        }


                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </main>


        </>
    )
}

export default Account;