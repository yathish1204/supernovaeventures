import Home from "@/components/Home/Home"
import Title from "@/components/Title"



export const metadata = {
  title:'Supernova - Event Planners',
  description:'Generated by Next.js',
}

const page = () => {
  return (
    <div>
      <Home />
      <Title text1={'OUR Services'} />
      <Title text1={'OUR Happy Clients!'} />
    </div>
  )
}

export default page
