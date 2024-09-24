import React from 'react'


export async function generateMetadata({ params }) {
  return {
    title: `Supernova - ${params.photo}`,
    description: `Dreams to Reality`,
  };
}

const page = ({params}) => {
  return (
    <div>
      Photo single {params.photo}
    </div>
  )
}

export default page
