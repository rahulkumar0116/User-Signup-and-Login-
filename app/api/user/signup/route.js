import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect()

export async function POST(request){
    try {
        const reqBody = await request.json();
         const {username,email,password}=reqBody
         console.log(reqBody);

        const user= await User.findOne({email})
        if(user){
            return NextResponse.json({error:"email already exists.."})
        }
        //Hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash
        (password,salt)
        const newUser = new User({
            username,
            email,
            password:hashedpassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser);
        return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
        });
    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500});
    }
}