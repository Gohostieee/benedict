
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Contacts() {
    const [History,useHistory] = useState()
    function goback() {
        console.log(history.back())
    }
    useEffect(function SetHistory(){
        const Hist = localStorage.getItem("history")
        let res;
        if(Hist === null) {
            res = []            
        }
        else {
            res = JSON.parse(Hist);
        }
        useHistory(res);
    },[])


    return(
        <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h z-[2] relative m-auto">
			<div className='w-[90vw] m-auto overflow- block'>
                <div className='flex justify-between'>
                <h1 className='text-white top-24 relative text-8xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p pr-4 pl-4 border-red-500 '>Benedict</h1>
				<div className='flex'>
                    <a href='/'><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Home</button></a>
		    		<a href='/about'><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>About</button></a>
			    	<a href='/services'><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Services</button></a>
			    	<a onClick={goback}><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Back</button></a>
                </div>
                
                </div>
				
                <div className='top-48 relative border p-4 bg-black bg-opacity-70 flex justifycenter'>
                    
                    <p className='text-white text-2xl font-light  p-2 m-4'>Discord: Muttley#4045</p>
                    <p className='text-white text-3xl mt-4 mb-4 font-thin border-x p-2 m-4'>
                        <a href="www.discord.com" className='text-purple-400 underline underline-offset-4'>Discord</a> used for a more personal and direct contact, feel free to add it for whatever reason you might need
                    </p>
                    
                </div>
                <div className='top-48 relative border p-4 mt-8 bg-black bg-opacity-70 flex justifycenter'>
                    
                    <p className='text-white text-2xl font-light  p-2 m-4'>Email: Josh32eb@gmail.com</p>
                    <p className='text-white text-3xl mt-4 mb-4 font-thin border-x p-2 m-4'>
                        <a href="www.gmail.com" className='text-red-500 underline underline-offset-4'>Gmail</a> for a more formal exchange. 
                    </p>
                    
                </div>
            </div>
      </main>
	  <div className='h-[300vh] bgwave opacity-100 w-[200%] absolute block top-0 z-[1] overflow-hidden overflow-y-hidden opacity-60'/>
	
      
        </>
    )
}