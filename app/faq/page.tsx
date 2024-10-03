import Faq from '@/components/faq/Faq'
import Footstep from '@/components/footStep/Footstep'
import { paths } from '@/utils/paths'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Footstep>
        <Link href={paths.home} className=" cursor-pointer hover:text-green-800 ">হোম</Link> / <span className=" text-green-800 ">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী</span>
      </Footstep>
      <Faq />
    </div>
  )
}

export default page