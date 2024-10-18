import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest , NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({cookies : () => cookieStore})
    const {name,password} = await req.json()

    if(name && password){
       // const {data,error} = awaits supabase...

        return NextResponse.json(`${name} has registered`)

    }
    return NextResponse.json({message:"not done"})



    
}

