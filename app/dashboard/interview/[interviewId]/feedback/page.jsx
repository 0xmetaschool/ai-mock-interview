"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


function Feedback({params}) {

    const [feedbackList,setFeedbackList]=useState([]);
    const router=useRouter();
    useEffect(()=>{
        GetFeedback();
    },[])
    const GetFeedback=async()=>{
        const result=await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef,params.interviewId))
        .orderBy(UserAnswer.id);

        console.log(result);
        setFeedbackList(result);
    }

  return (
    <div className='min-h-screen flex flex-col p-10'>
        
        {feedbackList?.length==0?
        <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>  
          :
        <>
       <h2 className='text-3xl font-bold text-black'>Congratulation!</h2>
        <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
       
   
        <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
        {feedbackList&&feedbackList.map((item,index)=>(
            <Collapsible key={index} className='mt-7'>
            <CollapsibleTrigger className='p-2
             bg-secondary rounded-lg flex justify-between
            my-2 text-left gap-7 w-full'>
            {item.question} <ChevronsUpDown className='h-5 w-5'/>
            </CollapsibleTrigger>
            <CollapsibleContent>
               <div className='flex flex-col gap-2'>
                <h2 className='text-black p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
                <h2 className='p-2 border rounded-lg bg-black text-sm text-black'><strong>Your Answer: </strong>{item.userAns}</h2>
                <h2 className='p-2 border rounded-lg bg-black text-sm text-black'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                <h2 className='p-2 border rounded-lg bg-black text-sm text-black'><strong>Feedback: </strong>{item.feedback}</h2>
               
               </div>
            </CollapsibleContent>
            </Collapsible>
        ))}
 
  </>}
        
        <Button onClick={()=>router.replace('/dashboard')} variant="outline">Go Home</Button>
    </div>
  )
}

export default Feedback