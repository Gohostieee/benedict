import {NextPage} from "next";
import {useEffect, useState} from "react";
import {userData} from "../interface";

const Account:NextPage = () => {
    const [user,useUser] = useState({name:"",password:"",login:false});
    const SetUser = (x:Function,y:userData) => {
        x(y)
    }
    useEffect(()=>{
        let tempData
        if(!user.login){
            tempData = localStorage.getItem("user");
            if(tempData != null) {
                tempData = JSON.parse(tempData);
            } else {
                window.location.href = "/login"
            }
            SetUser(useUser,tempData)

        }
    })


    return (
        <>
        </>
    )
}

export default Account;