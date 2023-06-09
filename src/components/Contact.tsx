import Image from "next/image";
import ContactImg from "../../public/vecteezy_email-and-mail-icon-black_20009601_913 (2).svg";

export default function Contact(props: {
  title: string;
  description: string;
  reverse: boolean;
  img: any;
}) {
  return (
    <section id="contact">
    <div className="w-full flex flex-wrap bg-[#ce9f62] p-8" >
      <div
        className={`w-full md:w-1/2 ${props.reverse ? "order-2" : ""}`}
        style={{ height: "100%" }}
      >
        <div className="h-full flex flex-col justify-center text-white">
          <h1 className="font-semibold mb-3 text-3xl">{props.title}</h1>
          <h1 className="text-lg pb-3">{props.description}</h1>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Email" />
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

            </div>
            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Phone" />
          </div>

          <textarea id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md resize-vertical h-auto focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Tell us about your project"></textarea>

<button type="button" className=" mt-5 text-white hover:bg-gray-200 rounded-full px-5 py-2.5 text-center inline-flex items-center justify-center bg-gradient-to-r from-btnPrim to-btnSec mr-2 mb-2">
              Submit
            </button>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 ${props.reverse ? "order-1" : ""}`}
        style={{ height: "100%" }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <Image width={650} height={650} src={props.img} alt="Contact us" />
        </div>
      </div>
    </div>
    </section>
  );
}
