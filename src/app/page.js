"use client"
import HomeLogin from "@/components/HomeComponents/HomeLogIn";
import { useEffect } from "react";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(()=>{
    const token =  localStorage.getItem('token')
     if(token != null){
       setIsLoggedIn(true)
     }
   },[])



  return (
   <>
   {isLoggedIn && <HomeLogin/>}
   </>
  );
}
