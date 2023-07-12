import Link from "next/link";
import Image from "next/image";
import elbow from "@/public/elbow.jpg";

const Banner = () => {
  return (
    <div
      className="text-black justify-items-center uppercase section bg-cover bg-no-repeat text-center"
      id="Home"
    >
      <div className="bg-cover -z-10">
        <>
          <Image src={elbow} alt="massage" w-full h-200 />
        </>
      </div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className=" md:text-7xl text-6xl font-bold md:py-6">
          <h1 className="text-align font-bold p-40">
            become{" "}
            <span className="whitespace-nowrap text-center">pain free</span>
          </h1>
        </div>
        <Link href={"/booking"}>
          <button className="rounded border-2 border-white px-7 pb-[8px] bg-orange-800 pt-[10px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-orange-800 hover:bg-orange-700 hover:bg-opacity-10 hover:text-orange-800 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            book now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
