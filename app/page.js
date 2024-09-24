import Button from "@/components/Button"
import Title from "@/components/Title"


export const metadata = {
  title:'Supernova - Event Planners',
  description:'Generated by Next.js',
}

const page = () => {
  return (
    <div>
      Main content goes here except navbar and footer
      <Title text1={'ABOUT US'} />
      <Button text='Find out more' href='/about' />
      <Title text1={'OUR Services'} />
      <Title text1={'OUR Happy Clients!'} />
      <Title text1={'Any Queries '} />
    </div>
  )
}

export default page
