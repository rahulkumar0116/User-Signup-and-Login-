"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";


const Signup =()=> {
  const router = useRouter();
  const [user ,setUser] =React.useState({
    email:"",
    password:"",
    username:"",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading,setLoding] = React.useState(false);
  const onSignup = async()=>{
    try {
      setLoding(true);
      const response = await axios.post("/api/user/signup/",user)
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
      
    }finally{
      setLoding(false)
    }
  }
  useEffect(()=>{
    if(user.email.length > 0 && user.username.length >0 && user.password.length > 0){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {loading ? "Processing to Singup" : "Signup to account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={user.username}
                  onChange={(e)=> setUser({...user,username:e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={(e)=> setUser({...user,email:e.target.value})}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={(e)=> setUser({...user,password:e.target.value})}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={onSignup}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {buttonDisabled ? "No Signup" : "Signup"}
              </button>
            </div>
            <div>
              {/* <button 
                className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
               <a href="/login">Login Here</a>
              </button> */}
              <Link href="/login" className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >Login Here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;