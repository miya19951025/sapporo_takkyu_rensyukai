"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 flex items-center">
              <Image 
                src="images/sapporo-takkyu-rensyukai.jpg" 
                alt="札幌卓球練習会" 
                width={140} 
                height={56} 
                className="object-contain h-full w-auto rounded-lg" 
              />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">札幌卓球練習会</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/#hero" className="text-white font-medium hover:text-accent-light transition-colors">
                練習会とは
              </Link>
            </li>
            <li>
              <Link href="/#practice-info" className="text-white font-medium hover:text-accent-light transition-colors">
                練習案内
              </Link>
            </li>
            <li>
              <Link
                href="/#tournament-info"
                className="text-white font-medium hover:text-accent-light transition-colors relative"
              >
                大会案内
                <span className="absolute -top-1 -right-8 text-accent text-xs font-bold">NEW</span>
              </Link>
            </li>
            <li>
              <Link href="/#organizer" className="text-white font-medium hover:text-accent-light transition-colors">
                主催者紹介
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white font-medium hover:text-accent-light transition-colors">
                大会結果
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="bg-accent text-white font-bold px-6 py-2.5 rounded-full hover:bg-accent-light transition-colors shadow-md"
              >
                問い合わせ
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/#hero"
                  className="block text-white font-medium py-2 hover:text-accent-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  練習会とは
                </Link>
              </li>
              <li>
                <Link
                  href="/#practice-info"
                  className="block text-white font-medium py-2 hover:text-accent-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  練習案内
                </Link>
              </li>
              <li>
                <Link
                  href="/#tournament-info"
                  className="block text-white font-medium py-2 hover:text-accent-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  大会案内 <span className="text-accent text-xs font-bold ml-1">NEW</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#organizer"
                  className="block text-white font-medium py-2 hover:text-accent-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  主催者紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block text-white font-medium py-2 hover:text-accent-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  大会結果
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block bg-accent text-white font-bold px-6 py-2.5 rounded-full hover:bg-accent-light transition-colors shadow-md text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
