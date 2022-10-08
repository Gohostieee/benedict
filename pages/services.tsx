import {NextPage} from "next";
import styles from "../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link";


const Services: NextPage = () => {


    return (
        <div>
            <Head>
                <title>Create Next pp</title>
                <meta name="description" content="Generateby create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="h z-[2] relative m-auto">
                <div className="absolute overflow-hidden h-[200vh] w-[99vw]">
                    <div className="h-[300vh] bgwave opacity-100 w-[200%] fixed inline top-0  overflow-hidden opacity-60"/>

                </div>
                <div className="w-[90vw] m-auto overflow- block">
                    <div className="flex justify-between">
                        <h1 className="text-white top-24 relative text-8xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p pr-4 pl-4 border-red-500 ">Benedict</h1>

                        <a href = {"/"}><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Back</button></a>

                    </div>





                    <div className="top-48 relative border p-4 bg-black bg-opacity-70 flex">

                        <div className={"flex flex-col justify-center"}>  <p className="text-white text-2xl font-light  p-2 m-4">Host Documents</p> </div>
                        <p className="text-white text-2xl mt-4 mb-4 font-thin border-x p-2 m-4">
                            TLDR: Sharing documents, particularly things like excel docs, suck, large documents are very taxing on the system, and some guys just aint
                            running a lean piece of hardware. Just make an account, and upload it or something <a href={"/account"} className={"text-cyan-600 underline underline-offset-4"}>here.</a>
                        </p>

                    </div>



                    <div className="top-48 mt-12 relative border p-4 bg-black bg-opacity-70 flex">

                        <div className={"flex flex-col justify-center"}> <p className="text-white text-2xl font-light  p-2 m-4">Classes</p> </div>
                        <p className="text-white text-2xl mt-4 mb-4 font-thin border-x p-2 m-4">
                            {`Alot of people struggle with this kinda stuff, like bro I started coding way before entering college and
                            going into college all my classmates were struggling hard, to be fair the college started with C as their first proper language
                            for some reason (they had some experience with pseint before getting into C), but I basically had to carry everyone through. And
                            basically all of them were getting something extremely specific twisted about coding, and they just couldn"t wrap their head
                            around it, of course I ain"t going to tell you what that is, I"m charging you for that dummy! (Or well maybe if I feel like it I"ll put it on a post
                            or something later.`} <br/> <Link href={"/teaching"} className={"text-pink-600 underline underline-offset-4"}>Come here and feed me!</Link>
                        </p>

                    </div>

                    <div className="top-48 mt-12 relative border p-4 bg-black bg-opacity-70 flex">

                        <div className={"flex flex-col justify-center"}> <p className="text-white text-2xl font-light  p-2 m-4">Networking</p> </div>
                        <p className="text-white text-2xl mt-4 mb-4 font-thin border-x p-2 m-4">
                            {`You know what I hate? The fact that there is no place to like, connect with other engineers and stuff, linkedin is too formal, reddit is kinda cringe
                            and discord is too public man, like it"d be nice to just be able to see someones profile and just dm them (if you do that on discord, you are kinda
                            weird man), so I"m probably going to do that, I"m not doing it right now, but ya know, maybe in like a week, it"s not that hard yk?`}<br/> <Link href={"/account"} className={"text-green-600 underline-offset-4 underline"}> Go check out your account, make it SPICY</Link>
                        </p>

                    </div>

                    <div className="top-48 mt-12 relative border p-4 bg-black bg-opacity-70 flex">

                        <div className={"flex flex-col justify-center"}> <p className="text-white text-2xl font-light  p-2 m-4">Cooking</p> </div>
                        <p className="text-white text-2xl mt-4 mb-4 font-thin border-x p-2 m-4">
                            {`I make a mean ass spaghetti man, like MMM, it"s some steal ya mans and ya dad kinda spaghetti.`}
                        </p>

                    </div>

                    <div className="top-48 mt-12 relative border p-4 bg-black bg-opacity-70 flex">

                        <div className={"flex flex-col justify-center"}> <p className="text-white text-2xl font-light  p-2 m-4">Fashion</p> </div>
                        <p className="text-white text-2xl mt-4 mb-4 font-thin border-x p-2 m-4">
                            {`I also as a multi-talented and multi-faceted individual, have amazing taste in fashion, you guys should listen to me trust me.
                            Hit me up once I"ll getchu all the outfits to like pick up girls and stuff. `}<a href={"https://www.youtube.com/c/FrugalAesthetic"} className={"text-orange-600 underline underline-offset-4"}>{`(He's kinda cute)`}</a> {`(Can you tell the more I write the less I care? (PS: For any potential
                            employers this doesn"t reflect my job, I love my job! I swear guys I wouldn"t do any dumb stuff at my job!! PLEASE MAN I"M STARVING DO YOU KNOW HOW MUCH
                            IT COSTS TO KEEP A HORSE ALIVE? ME NEITHER BUT THESE MFS JUST SAPPING MY CREDIT CARD CLEAN EITHER WAY!!!))`}
                        </p>


                    </div>




                </div>
            </main>



        </div>
    )
}


export default Services;