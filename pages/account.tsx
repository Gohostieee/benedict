import {NextPage} from "next";
import {useEffect, useRef, useState} from "react";
import {userData, userDetails} from "../interface";
import lain from "../img/lain.png"
import Head from "next/head";
import axios from "axios";
import GridSelect from "../components/gridselect";

const Account: NextPage = () => {
    const [contentEdit,useContentEdit] = useState({Username: false, Bio: false});
    const bio = useRef<HTMLParagraphElement>(null),name = useRef<HTMLParagraphElement>(null);
    const [user, useUser] = useState({name: "", Password: "", login: false,Email:""}), [userDeets,useUserDeets] = useState({name:"Loading...",bio:"Loading..."});
    const SetUser = (x: Function, y: userData) => {
        x(y)
        
    }
    const SetUserDetails = (stateHook:Function,details:userDetails) =>{
        stateHook(details);
    }
    const Edit = (x:"Username" | "Bio" | "Cancel" | "Save") => {
        let tempData = userDeets;
        let tempAccess = {Username:false,Bio:false};
        switch(x){
            case "Username":
                tempAccess = {Username:true,Bio:false};

                break;

            case "Bio":
                tempAccess = {Username:false,Bio:true};

                break;
            case "Cancel":
                tempAccess = {Username:false,Bio:false};
                if(bio.current != undefined) {
                    bio.current.innerText = userDeets.bio

                }
                if (name.current != undefined) {
                    name.current.innerText = userDeets.name
                }
                break;
            case "Save":
                tempAccess = {Username:false,Bio:false};
                if(bio.current != undefined && name.current != undefined) {
                    tempData = {name:name.current.innerText,bio:bio.current.innerText}
                } else {
                    tempData = {name:"something went wrong!",bio:"reload the page!"}
                }

        }
        useUserDeets(tempData)
        useContentEdit(tempAccess)
    }
    const SaveInfo = async () => {
        // @ts-ignore
        await axios({url:"/api/user/profile",method:"post",data:{name:name?.current.innerText,bio:bio?.current.innerText,email:user.Email,password:user.Password}}).then(x => {
            switch(x.status) {
                case 200:
                    Edit("Save");
                    break;
                case 201:
                    Edit("Cancel")
                    break;

            }
        })
    }
    const GetInfo = async () => {
        await axios({url: `/api/user/profile?Email=${user.Email}`, method: "get"}).then(x => {
            console.log(x,"data")
            SetUserDetails(useUserDeets,{name:x.data?.username,bio:x.data?.bio,})
        })

    }
    const uploadFile = () => {
        document.getElementById("upload")?.click();
    }
    //WILL NAME IT SOMETHING BETTER LATER
    /*
    const uploadFile2 = async (data:FileList | null) => {
        if( data!= null) {
            
            for(const file in data) {
                if (Object.prototype.hasOwnProperty.call(data, file)) {
                    data[file].arrayBuffer().then(async buffer => {
                        const byteData = new Uint8Array(buffer)
                        console.log(data[file])
                    })

                }
            }
        }
    }
    */

    useEffect(() => {
        let tempData
        if (!user.login) {
            tempData = localStorage.getItem("user");
            if (tempData != null) {
                tempData = JSON.parse(tempData);
            } else {
                window.location.href = "/login"
            }
            
        }
        SetUser(useUser, tempData)
        SetUserDetails(useUserDeets,{name:"Loading...",bio:"Loading..."})
    }, [])

    useEffect(() => {
        if (user.login) {
            GetInfo()
        }
    }, [user])
    return (
        <>
            {/*

            <input multiple onChange={(x)=>{uploadFile2(x.target.files)}} accept={".cvs,.doc,.txt,.docx"} type='file' id = "upload" hidden/>

            */
            }
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
                                        <p ref = {name} contentEditable={true} className={"text-violet-400 ml-4 text-4xl border-x pl-4 pr-4 cursor-pointer border-emerald-400 inline border-fuchsia-400 font-thin"}>{userDeets.name}</p>
                                        :
                                        <p ref = {name} contentEditable={false} className={"text-violet-400 ml-4 text-4xl border-b border-emerald-400 h-12 font-thin"}>{userDeets.name}</p>


                                    }
                                    {contentEdit.Bio ?
                                        <p contentEditable={true} ref = {bio}
                                           className={"text-violet-400 ml-4 text-xl  text-justify mt-2 border border-fuchsia-400 p-4 min-h-12 cursor-pointer font-thin"}>
                                            {userDeets.bio}
                                            </p>

                                        :
                                        <p contentEditable={false} ref = {bio}
                                           className={"text-violet-400 ml-4 text-xl  text-justify mt-2 font-thin"}>
                                            {userDeets.bio}    
                                           </p>

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
                                                <button onClick = {SaveInfo}
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

                    {
                        /*
                        <div className={"bg-black bg-opacity-90 border-2 mt-12 w-[100%]"}>
                        <div className={"w-[90%] ml-[5%]"}>
                            <button onClick={uploadFile}
                                    className={"border  block mt-12 m-auto font-thin text-2xl p-2 pl-4 pr-4 text-violet-400 hover:text-white hover:bg-violet-700 transition-colors"}>UPLOAD
                                FILE
                            </button>

                        </div>


                    </div>
                     */
                    }
                </div>

            </main>


        </>
    )
}

export default Account;