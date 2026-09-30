'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'CV', href: '/cv' },
]

const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full min-h-[3.5rem] px-4 flex justify-between items-center bg-cream/[0.92] backdrop-blur-[10px] border-b border-border-light shadow-sm md:px-[max(5vw,calc((100vw-70rem)/2))]">
      {/* Left: small photo + name */}
      <div className="flex items-center gap-2">
        <Image
          src="./images/sy.jpg"
          alt=""
          width={32}
          height={32}
          unoptimized
          className="block w-8 h-8 rounded-full object-cover md:hidden"
        />
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-heading hover:text-link-blue-hover transition-colors leading-tight md:text-[1.625rem]">
          Seongyoon Kim
        </Link>
      </div>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`relative inline-block px-3 text-[0.9375rem] leading-[3.5rem] whitespace-nowrap text-slate-body no-underline
                after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-2 after:h-0.5 after:rounded-sm after:bg-link-blue after:scale-x-0 after:transition-transform after:duration-200
                hover:after:scale-x-100 ${pathname === href ? 'after:scale-x-100' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="relative w-[30px] h-[25px] p-0 border-0 flex flex-col justify-around bg-transparent cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className={`w-full h-[3px] rounded-sm bg-gray-700 origin-center transition-all duration-200 ${open ? 'translate-y-[8px] rotate-45' : ''}`} />
        <span className={`w-full h-[3px] rounded-sm bg-gray-700 origin-center transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`w-full h-[3px] rounded-sm bg-gray-700 origin-center transition-all duration-200 ${open ? '-translate-y-[8px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <ul className={`absolute top-full right-0 w-[min(13rem,90vw)] m-0 p-0 list-none bg-cream shadow-lg rounded-bl-lg transition-all duration-200 md:hidden
        ${open ? 'translate-x-0 visible' : 'translate-x-full invisible'}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href} className="border-b border-gray-100 last:border-b-0">
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className={`block w-full min-h-[2.75rem] px-5 py-4 text-base text-slate-body no-underline
                hover:bg-blue-50 hover:text-link-blue-hover
                ${pathname === href ? 'text-link-blue-hover bg-blue-50 shadow-[inset_3px_0_0_var(--tw-shadow-color)] shadow-link-blue' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
