"use client";

import {Button} from "@/components/ui/button";
import {useState} from "react";
import { Input } from "@/components/ui/input";


export default function Home() {

  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div>
      <Input placeholder="name" value={name} onChange={(e)=>e.target.value}/>
    </div>
  );
}
