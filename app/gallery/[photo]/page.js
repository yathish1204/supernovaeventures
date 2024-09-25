import Loading from '@/components/Loading';
import React from 'react'
import { Suspense } from 'react';


export async function generateMetadata({ params }) {
  return {
    title: `Supernova - ${params.photo}`,
    description: `Dreams to Reality`,
  };
}

const page = ({params}) => {
  return (
    <Suspense fallback={<Loading/>} >
      <div>
        Photo single {params.photo}
      </div>
    </Suspense>
  )
}

export default page
