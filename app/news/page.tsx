import React from 'react'
import News from '@/components/news/News'
import Footstep from '@/components/footStep/Footstep'
import Link from 'next/link'
import { paths } from '@/utils/paths'

const NewsPage = () => {
  return (
    <div>
        <Footstep>
          <Link href={paths.home} className=" cursor-pointer hover:text-green-800 ">Home</Link> / <span className=" text-green-800 ">News</span>
        </Footstep>
        <News />
    </div>
  )
}

export default NewsPage