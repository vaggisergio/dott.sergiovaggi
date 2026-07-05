'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navLinks, dottore } from '@/lib/data'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-medical-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex flex-col leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medical-blue-800"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-lg font-semibold text-medical-blue-900 sm:text-xl">
            {dottore.nome}
          </span>
          <span className="text-xs font-medium tracking-wide text-aqua-accent-600 sm:text-sm">
            {dottore.titolo}
          </span>
        </Link>

        {/* Navigazione desktop */}
        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-medical-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${dottore.telefonoHref}`}
            className="text-sm font-semibold text-medical-blue-800 hover:text-medical-blue-900"
          >
            {dottore.telefono}
          </a>
          <Link
            href="/contatti/"
            className="inline-flex items-center justify-center rounded-full bg-aqua-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-aqua-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-600"
          >
            Richiedi Visita
          </Link>
        </div>

        {/* Bottone menu mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-medical-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-7 w-7"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigazione principale mobile"
          className="border-t border-medical-blue-100 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-neutral-700 hover:bg-medical-blue-50 hover:text-medical-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href={`tel:${dottore.telefonoHref}`} className="text-center text-base font-semibold text-medical-blue-800">
              Chiama: {dottore.telefono}
            </a>
            <Link
              href="/contatti/"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-aqua-accent px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-aqua-accent-600"
            >
              Richiedi Visita
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
