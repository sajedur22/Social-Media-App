import Feed from "@/components/Feed"


import Share from "@/components/Share"
import { prisma } from "@/prisma"
import Link from "next/link"




const Homepage =async () => {
  const users=await prisma.user.findMany()
  console.log(users)
  return (
    <div className=''>
     <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
      <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href={'/'}>For you</Link>
      <Link className="pb-3 flex items-center " href={'/'}>Following</Link>
      <Link className="pb-3 hidden  md:flex items-center" href={'/'}>react.js</Link>
      <Link className="pb-3 hidden  md:flex items-center" href={'/'}>JavaScript</Link>
     </div>
    <Share/>
   <Feed/>
    </div>
  )
}

export default Homepage