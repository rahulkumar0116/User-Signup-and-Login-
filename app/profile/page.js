"use client"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast";


const HomePage = () => {

  const router = useRouter();
  
  const Logout = async ()=>{
  try {
    await axios.get("/api/user/logout")
    toast.success("Logout successful")
    router.push("/login")
  } catch (error) {
    console.log(error.message)
    toast.error(error.message)
  }
}
  return (
    <div className=' flex flex-col itams-center justify-center'>
      <h2>Profile</h2>
      <hr />
      <p>Profile Page</p>
      <hr />
      <button onClick={Logout}>Logout</button>
    </div>
    
  )
}

export default HomePage