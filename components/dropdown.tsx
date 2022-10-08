import {useEffect, useRef, useState} from "react";
import porcoEngine from "../img/porcoEngine.png"
import {dropdownData} from "../interface";
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";

interface props {
    data:dropdownData[]
}

function Dropdown({data}:props) {
    const [refresh,useRefresh] = useState(0)
    const views = useRef([false])
    const [page,usePage] = useState<Element[]>()
    function parseData(data:dropdownData[]):JSX.Element[] {
        let response:JSX.Element[] = [];

        console.log(data)
        for(const index in data){
            response.push(
                <>
                {views?.current[index] ?
                    <div  className={"w-[100%] overflow-hidden duration-500 max-h-[2500px] bg-black bg-opacity-90 transition-all border-2 border-white"}>
                        <button onClick={function Go(){views.current[index]=false;useRefresh(refresh+1)}} className={"w-[100%] text-white text-center text-2xl font-thin leading-[40px] hover:text-black hover:bg-white hover:border-fuchsia-400 transition-colors"}>
                            {data[index].name}
                        </button>
                        {data[index].data}
                    </div>
                    :
                    <div className={"w-[100%] overflow-hidden max-h-[42px] duration-500 bg-black bg-opacity-90 transition-all border-2 border-white"}>
                        <button onClick={function Go(){views.current[index]=true;useRefresh(refresh+1)}} className={"w-[100%] text-white text-center text-2xl font-thin leading-[40px] hover:text-black hover:bg-white hover:border-fuchsia-400 transition-colors"}>
                            {data[index].name}
                        </button>
                        {data[index].data}

                    </div>

                }
                    </>
            )
        }
        return response;
    }
    useEffect(()=> {
        // @ts-ignore
        return usePage(parseData(data));
    })
    // @ts-ignore
    return (
        <div className={"w-[100%] flex flex-col overflow-hidden"}>
            {page}
        </div>
    )
}

export default  Dropdown