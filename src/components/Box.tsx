import Image from "next/image";

export default function Box(props: {
  title: string;
  description: string;
  reverse: boolean;
  img: any;
}) {
  return (
    <div className="w-full flex flex-wrap bg-white">
      <div
        className={`w-full md:w-1/2 ${props.reverse ? "order-2" : ""}`}
        style={{ height: "100%" }}
      >
        <div className="h-full flex flex-col justify-center p-10">
          <h1 className="font-semibold mb-3 text-3xl">{props.title}</h1>
          <h1 className="text-lg">{props.description}</h1>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 ${props.reverse ? "order-1" : ""}`}
        style={{ height: "100%" }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <Image width={450} height={450} src={props.img} alt="asd" />
        </div>
      </div>
    </div>
  );
}
