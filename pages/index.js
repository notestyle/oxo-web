import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-3">
      <div className=" bg-purple-300 w-full h-1/5"></div>
      <div className=" w-full h-1/5 flex gap-3">
        <div className="bg-purple-300  w-full h-full"></div>
        <div className="bg-purple-300  w-full h-full"></div>
      </div>
      <div className=" bg-purple-300 w-full h-1/5"></div>
      <div className="  w-full h-1/5 flex gap-3">
        <div className="bg-purple-300  w-full h-full"></div>
        <div className="bg-purple-300  w-full h-full"></div>
      </div>
      <div className=" bg-purple-300 w-full h-1/5"></div>
    </div>
  );
}
