import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GridSelect from '../components/gridselect'
import {dropdownData, gridSelData, img} from '../interface'
import lain from "../img/lain.png"
import prinny from "../img/bigPrinny.png"
import porcoEngine from "../img/porcoEngine.png"
import tsubasa from "../img/tsubasa.jpg"
import python from "../img/python.png"
import js from "../img/js.png"
import cpp from "../img/C++.png"

import Dropdown from "../components/dropdown";

const Courses: NextPage = () => {
    const dropdown: dropdownData[] = [{
        name: "Introductory course", data: (
            <div className={"m-auto w-[80%] mt-12 pt-12 border-t text-center"}>

                <p className={"text-white font-light text-xl text-justify"}>Starting in development can be an extremely
                    daunting
                    task, it is an extremely expansive field with many specializations and paths you have to take in
                    order,
                    to be able to keep up with today's top of the line engineers. Although if you are not very
                    tech-savy, you probably have next to no clue how far these specializations can go. This is something
                    that
                    will be explored more in depth throughout the length of the course, however due to these needs, many
                    languages
                    have been developed in order to perform very specific jobs. These can be divided into the main roles
                </p>
                <div className={"flex justify-between w-[100%] mt-12 border-y p-12"}>
                    <div className={"w-[33%] border-l"}>
                        <img className={"h-[140px] m-auto"} src={python.src}/>
                        <p className={"font-light text-xl mt-4 text-center text-white"}>General purpose languages</p>
                        <p className={"text-lg mt border-t  ml-4 mr-4 text-justify text-white font-light pl-2 pr-2"}>
                            There exists a section of languages referred to as, general purpose languaes, due to them
                            not being tied down to any specific task, or function, they are built as a sort of jack of all trades,
                            a huge proportion of them are scripting language, and aren't particularly efficient. But they actually tend to
                            dominate a lot of the industry (particularly python), for a good number of reasons. A lot of them are extremely friendly to the developer, and
                            focus a lot on readability and writing clean, and coherent code. They also make up for a lot of the weaknesses found in order languages.
                            Like for example, if I website that focused heavily on manipulating and analysing data, instead of using plain old javascript whose data analytics library is extremely
                            lackluster. I could make a website with python in order to make use of a broader set of tools.
                        </p>
                    </div>
                    <div className={"w-[33%] border-l"}>
                        <img className={"h-[140px] m-auto"} src={cpp.src}/>
                        <p className={"font-mono text-xl mt-4 text-center text-white"}>Hyper performant code</p>
                        <p className={"text-lg mt border-t  ml-4 mr-4 text-justify text-white font-light pl-2 pr-2"}>
                            Frequently cited as the most difficult facet of engineering, when you need to write blazingly fast (😉) code,
                            that needs to be as efficient as possible, particularly when writing critical infrastructure such as an OS,
                            or an application which boasts extremely intensive algorithms and demands as much performance as possible,
                            like for example a game, you need to use a set of languages specifically created for such needs, you probably know these languages
                            since they consist of the most popular family of languages in the world, being on par with python and javascript. These would be
                            the C family of languages, and a good number of other languages based on them. Reallyyyy don't recommend anyone start over here,
                            this is extremely intensive and me having started with high-level languages (will be explained later), when I moved into these sort of
                            languages, I struggled a fair bit, even after several years of experience, the experience for someone whose completely fresh
                            would be unnecessarily complex and overly limiting.

                        </p>
                    </div>
                    <div className={"w-[33%] border-l"}>
                        <img className={"h-[140px] m-auto"} src={js.src}/>
                        <p className={"font-mono text-xl mt-4 text-center text-white"}>Highly specialized
                            ecosystem
                        </p>
                        <p className={"text-lg mt border-t  ml-4 mr-4 text-justify text-white font-light pl-2 pr-2"}>
                            Sometimes when a particular field becomes extremely popular, something called an
                            ecosystem is develop around it. An ecosystem in this context could be defined as a suite of
                            tools
                            that present many different ways to aid and work towards a specific goal. Some prolific
                            examples of this
                            would be the web-dev ecosystem, and the game-dev ecosystem. Out of these two the game-dev
                            scene is
                            probably the one the public would be the most familiar with, since it is populated by
                            extremely popular/prestigious tools
                            such as Unity and Unreal Engine. Due to this, many engineers in these fields develop very
                            specific skills depending on what tools they use.
                            For example one isn't simply a frontend, or a backend dev, you are a
                            [React.js,Angular.js,Vue.js] dev and [.NET,Spring,Node.JS] dev respectively.</p>
                    </div>
                </div>
                <p className={"text-white font-mono text-2xl border-b-2 inline-block m-auto mt-12 mb-12"}>FEATURES</p>
                <p className={"text-white font-light text-xl m-auto "}>FEATURES</p>

                <p className={"text-white font-mono text-2xl border-b-2 inline-block m-auto mt-12 mb-12"}>PRICING</p>

            </div>

        )
    }]

    return (
        <>

            <div className='absolute overflow-hidden h-[100vh] w-[100vw]'>
                <div
                    className='h-[300vh] bgwave opacity-100 ease-linear w-[400vw] inline top-0 fixed overflow-hidden opacity-60'/>

            </div>
            <div className="">
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main className="h-[100vh] z-[2] relative m-auto">
                    <div className='w-[90vw] m-auto top-24 relative'>
                        <div className='flex justify-between'>
                            <h1 className='text-white relative text-8xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p pr-4 pl-4 border-red-500'>Benedict</h1>


                        </div>
                        <div className={"mt-12 overflow-y-hidden"}>
                            <Dropdown data={dropdown}/>

                        </div>

                    </div>
                </main>


            </div>

        </>
    )
}

export default Courses
