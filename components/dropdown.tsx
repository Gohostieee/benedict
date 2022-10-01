import {useRef, useState} from "react";
import porcoEngine from "../img/porcoEngine.png"

function Dropdown() {
    const [refresh,useRefresh] = useState(0)
    let views = useRef([false])
    return (
        <div className={"w-[100%] flex flex-col"}>
            {
                views.current[0] ?
                    <div onClick={function Go(){views.current[0]=false;useRefresh(refresh+1)}} className={"w-[100%] overflow-hidden h-[500px] bg-black bg-opacity-90 transition-all border-2 border-white"}>
                        <button className={"w-[100%] text-white text-center text-2xl font-thin leading-[50px] hover:text-black hover:bg-white hover:border-fuchsia-400 transition-colors"}>
                            OPEN
                        </button>
                        <img src = {porcoEngine.src} className = "h-[100%] m-auto"/>

                    </div>

                    :
                    <div className={"w-[100%] overflow-hidden h-[42px] bg-black bg-opacity-90 transition-all border-2 border-white"}>
                        <button onClick={function Go(){views.current[0]=true;useRefresh(refresh+1)}} className={"w-[100%] text-white text-center text-2xl font-thin leading-[50px] hover:text-black hover:bg-white hover:border-fuchsia-400 transition-colors"}>
                            OPEN
                        </button>
                        <img src = {porcoEngine.src} className = "h-[100%] m-auto"/>

                    </div>
            }

            <div className={"w-[100%] overflow-hidden min-h-[0px] bg-black bg-opacity-90 transition-all border-2 border-white"}>
                <button onClick={function Go(){views.current[0]=true;useRefresh(refresh+1)}} className={"w-[100%] text-white text-center text-2xl font-thin leading-[50px] hover:text-black hover:bg-white hover:border-fuchsia-400 transition-colors"}>
                    OPEN
                </button>
            </div>
        </div>
    )
}

export default  Dropdown