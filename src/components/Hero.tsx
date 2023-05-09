import Image from "next/image";
import { MouseEventHandler } from "react";

export default function Hero(props: {
  title: string;
  description: string;
  reverse: boolean;
  img: any;
}) {
  return (
    <div className="w-full flex flex-wrap mb-8">
      <div
        className={`slide-in-left w-full md:w-1/2 ${props.reverse ? "order-2" : ""}`}
        style={{ height: "100%" }}
        id="heroTitle"
      >
        <a href="#contact">
        <div className="h-full flex flex-col justify-center p-10">
          <h1 className="font-bold mb-3 text-5xl text-white">{props.title}</h1>
          <h1 className="text-lg text-white font-semibold">{props.description}</h1>
          
          <button className=" lg:hover:text-gray-100 lg:hover:scale-105 mt-5 text-white hover:bg-gray-200 rounded-full px-5 py-2.5 text-center inline-flex items-center justify-center bg-gradient-to-r from-btnPrim to-btnSec mr-2 mb-2 relative">
            <span className="z-10">Get in touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 pl-1 absolute top-1/2 right-4 transform -translate-y-1/2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-0 rounded-full"></span>
          </button>
          
        </div>
        </a>
      </div>
      <div
        className={` slide-in-right w-full md:w-1/2 ${props.reverse ? "order-1" : ""}`}
        style={{ height: "100%" }}
        id="heroImage"
      >
        <div className="w-full h-full flex justify-center items-center">
          <Image width={600} height={450} src={props.img} alt="asd" />
        </div>
      </div>
    </div>
  );
}
