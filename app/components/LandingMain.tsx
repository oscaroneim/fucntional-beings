import Link from "next/link"

const LandingMain = () => {
  return (
    <div className='text-black justify-items-center uppercase'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="">become pain free</h1>
        <Link href={"/booking"}><button className="uppercase">book now</button></Link>
        </div>
    </div>
  )
}

export default LandingMain