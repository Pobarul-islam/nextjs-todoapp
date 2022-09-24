
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "../firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import Todo from "./Todo";
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);


  

 

  
  return (
    <div className={style.bg}>
      
    </div>
  );
}
