import Link from 'next/link'
import React from 'react'
import { Button} from '@/components/ui/button'
import { ArrowBigRight } from 'lucide-react'
type Props = {
    title: string,
    linkHerf: string,
    linkTitle: string
}

const Header = (props: Props) => {
  return (
    <>
    <div className='flex justify-between py-6'>
        <div className='text-2xl font-semibold animate-bounce'>{props.title}</div>
        
        {
        props.linkHerf && props.linkTitle?
        <div className='flex justify-between'>

        <Button variant="outline" className='w-auto'>
        <Link href={props.linkHerf} className='md:text-l text-sm transition-colors hover:text-[#00A9FF] animate-pulse'>
            <ArrowBigRight className='h-10 w-8' />
        </Link>
        </Button>
        </div>
    : null
    }
    </div>
    </>
  )
}

export default Header