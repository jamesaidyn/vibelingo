'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/vibe/VibeLingo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="VibeLingo">
      <Image
        src={logo}
        alt="VibeLingo Logo"
        width={48} // <- increased from 32
        height={48} // <- increased from 32
        className="w-12 h-12 object-contain" // <- matches `text-2xl` height
        priority
      />
    </Link>
  )
}
