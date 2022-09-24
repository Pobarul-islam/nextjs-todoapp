
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "../firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import Todo from "./Todo";


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);


  

 

  
  return (
    <div className={style.bg}>
      
    </div>
  );
}
