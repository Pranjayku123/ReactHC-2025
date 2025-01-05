import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function BackgroundChanger() {
  const [color, setcolor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{background:color}}>
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-slate-400 rounded-lg">
      <button className="text-white m-2 p-2 rounded-xl" style={{backgroundColor:"black"}} onClick={()=>setcolor("black")}>Black</button>
      <button className="text-white m-2 p-2 rounded-xl" style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>Yellow</button>
      <button className="text-white m-2 p-2 rounded-xl" style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>Blue</button>
      <button className="text-white m-2 p-2 rounded-xl" style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red</button>
      <button className="text-white m-2 p-2 rounded-xl" style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green</button>
      </div>
    </div>
  );
}

export default BackgroundChanger;
