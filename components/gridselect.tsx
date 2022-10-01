import { gridSelData } from "../interface";
import type { NextPage } from 'next'


type UserType = {
    dob: string,
    firstName: string,
    userBio: string,
  };
interface UserProps {
    user: UserType,
  }
interface props {
    data:string
}

function parseData(data:gridSelData[]):JSX.Element[] {
	let result:JSX.Element[] = [];
	data.forEach(x => {
		result.push(
		<div className="ml-6 mr-6">
            <div className="m-auto text-center ">
            <a href={x.href}><p className=" bg-black bg-opacity-70 border inline p pr-2 pl-2 text-2xl text-white font-light hover:bg-white hover:text-black transition-all  ">{x.name.toUpperCase()}</p></a>

            </div>
                <div className="border-2 mt-4 border-white p-6 m-auto overflow-hidden w-[300px] h-[300px] transition-all bg-opacity-70 bg-black hover:p-12 hover:bg-opacity-0 hover:border-white">
			        <a href={x.href} className = "inline w-[100%] h-[100%]">
				    
                        <img src = {x.img.src} className = "h-[100%] m-auto"/>
                    </a>
			    </div>
		</div>
        )
	})
	return result
	
}
function GridSelect({data}:props)   {
    console.log(data,"what")
    
    const propsJson:gridSelData[] = JSON.parse(data)
    console.log(propsJson)
    return (
        <div className="h-[100%] w-[100%] flex flex-wrap justify-center">
            {parseData(propsJson)}
        </div>
    )

}


export default  GridSelect