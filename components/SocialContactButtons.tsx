'use client'

import Link from 'next/link'
import { useSocial } from '@/context/SocialProvider'


export default function SocialContactButtons() {
  const { instagramLink, tiktokLink, whatsappLink } = useSocial()

  return (
    <div className="flex flex-wrap gap-4">
      {/* Instagram Button */}
      <Link
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-pink-600 hover:bg-pink-700 px-4 py-2 flex items-center gap-2"
        aria-label="Instagram"
      >
        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
        </svg>
        <span className="text-white font-medium">@vibelingo</span>
      </Link>

      {/* TikTok Button */}
      <Link
        href={tiktokLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-black hover:bg-gray-800 px-4 py-2 flex items-center gap-2"
        aria-label="TikTok"
      >
        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12.883 2h2.735a4.474 4.474 0 0 0 4.382 3.75v2.602a7.056 7.056 0 0 1-4.382-1.5v7.342a5.88 5.88 0 1 1-5.88-5.88c.264 0 .522.02.774.06v2.655a3.253 3.253 0 1 0 3.253 3.252V2Z" />
        </svg>
        <span className="text-white font-medium">@vibelingo</span>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-emerald-600 hover:bg-emerald-700 px-4 py-2 flex items-center gap-2"
        aria-label="WhatsApp"
      >
        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.74 11.74 0 0 0 2.04 16.86L.14 23.58l6.88-1.8a11.7 11.7 0 0 0 5.7 1.45c6.49 0 11.76-5.27 11.76-11.76 0-3.15-1.23-6.11-3.46-8.34Zm-8.3 17.8c-1.8 0-3.56-.5-5.08-1.44l-.36-.22-4.09 1.07 1.1-3.99-.23-.37A9.27 9.27 0 1 1 12.2 21.28Zm5.08-6.99c-.28-.14-1.65-.82-1.91-.91s-.44-.14-.62.14-.71.91-.87 1.1-.32.21-.6.07a7.51 7.51 0 0 1-3.6-3.13c-.27-.46.27-.42.77-1.4.09-.17.05-.31-.02-.44-.07-.14-.62-1.49-.85-2.04-.22-.52-.45-.45-.62-.46l-.53-.01c-.18 0-.46.07-.7.34s-.92.9-.92 2.18.94 2.52 1.08 2.7c.14.17 1.86 2.83 4.51 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.1-.26-.16-.54-.3Z" />
        </svg>
      </Link>
    </div>
  )
}
