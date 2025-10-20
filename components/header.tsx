import { SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import UserMenu from './user-menu'

const Header = () => {
  return (
    <header className='container mx-auto'>
      <nav className='py-6 px-4 flex justify-between itesm-center'>
        <Link href="/">
          <Image src="/logo.png" alt="Teamora" width={200} height={56} className='h-10 w-auto object-contain' />
        </Link>

        <div className='flex items-center gap-4'>
           <Link href="/project/create">
             <Button variant={"destructive"} className='flex item-center gap-2'>
              <PenBox size={18} />
              <span>  Create project</span></Button>
            </Link>
          <SignedOut>
            <SignInButton>
              <Button variant={'outline'}>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header