
import Head from 'next/head'

export default function About() {

    function goback() {
        console.log(history.back())
    }



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
			    	<a href='/services'><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Services</button></a>
			    	<a href='/contacts'><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Contacts</button></a>
			    	<a onClick={goback}><button className='text-white m-4 top-24 block relative text-2xl font-bold mr-0 bg-black bg-opacity-40 text-red-500 border border-4 p-2 pr-4 pl-4 border-red-500 hover:bg-black hover:border-white hover:text-white hover:p-2 hover:border-2 hover:font-light transition-all '>Back</button></a>
                </div>
                
                </div>
                <div className='top-48 relative border p-12 bg-black bg-opacity-70'>
                    <p className='text-white text-xl font-light border-x p-2 inline'>What is this website?</p>
                    <p className='text-white text-2xl mt-4 mb-4 font-thin border-x p-2 '>
                        Benedict is a subset of the Muttley family and we are a group focused on providing information of various 
                        aspects of coding/software engineering for which any sort of documentation is very lacking and/or out of date.
                        As well as presenting various industry standard concepts, giving them context/reasoning so that new devs can take a 
                        step back and analyze these various these with a better understanding of the hows and whys, as if one cannot understand
                        the reasoning behind a decision they cannot be expected to effectively use and apply said techniques in a proficient manner.
                    </p>
                    <p className='text-white text-xl font-light border-x p-2 inline'>Can I contribute?</p>
                    <p className='text-white text-2xl mt-4 mb-4 font-thin border-x p-2 '>
                        Anyone can come and help, however the lessons are formatted in a very specific way and theres some quality control measures in place so 
                        you should head over to <a href='/contacts' className='text-cyan-600 underline underline-offset-4'>contacts</a> in order to talk it out with
                        the team.
                    </p>
                    <p className='text-white text-xl font-light border-x p-2 inline'>What services are offered?</p>

                    <p className='text-white text-2xl mt-4 mb-4 font-thin border-x p-2 '>
                        We of course have the written lessons which are completely free, however there are private paid courses targeting 
                        from midlevel engineers all the way down to fresh starts and college students, these are one on one or group sessions 
                        with different students and provide a more team-oriented experience, more information about this can be found <a href='/services' className='text-cyan-600 underline underline-offset-4'>here</a>.
                        We also plan on adding extra functionality into the website, especially one to network and meet other engineers.
                        This is something that really resonates within our team because we feel there just isn't a really good place to meet other 
                        engineers one on one. Not in a formal way but rather a more casual one.
                    </p>
                    <p className='text-white text-xl font-light border-x p-2 inline'>Got any other questions?</p>

                    <p className='text-white text-2xl mt-4 mb-4 font-thin border-x p-2 '>
                        This about page is pretty basic and only covers the gists of the website, if you have any other questions reach out to us at <a href='/contacts' className='text-cyan-600 underline underline-offset-4'>contacts </a> 
                        and we will gladly help answer any other questions you might have.
                    </p>
                </div>

            </div>
      </main>
	  <div className='h-[300vh] bgwave opacity-100 w-[200%] absolute block top-0 z-[1] overflow-hidden overflow-y-hidden opacity-60'/>
	
      
        </>
    )
}