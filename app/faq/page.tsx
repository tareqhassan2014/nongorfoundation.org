import Faq from '@/components/faq/Faq'
import Footstep from '@/components/footStep/Footstep'
import { paths } from '@/utils/paths'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Footstep>
        <Link href={paths.home} className=" cursor-pointer hover:text-green-800 ">Home</Link> / <span className=" text-green-800 ">FAQ</span>
      </Footstep>
      <Faq />
    </div>
  )
}

export default page