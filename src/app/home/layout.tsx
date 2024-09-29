'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import options from 'js/menu_options'
import Menu, { TOption } from 'cp/menu'
import ThemeButton from 'cp/theme_button'

import { State } from 'md/state'
import Reducer from '@/reducer/reducer'
import useInitialize from 'subscribe_state'

import 'st/globals.css'

const initial: State = {
  user: null,
  paginatorHp: 10,
  nextBtn: true,
  previousBtn: false,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  useInitialize(Reducer, initial);

  return (
    <html lang="en" className="class:bg-white">
      <body>
        <header className="fixed top-0 left-0 w-full shadow z-10 p2-4">
          <Menu options={options}>
            <div className="flex row justify-center w-28">
              <Link href="/home">
                <img className="h-16 w-18 md:h-10 md:w-26" src="https://cdn.tpeoficial.com/logos/Ho2Xa2Bn4Oi1Aq1Rg2Rq6Dq9Yb8Ab7Rv4Rt4Vb9A" alt="logo dymo" />
              </Link>
            </div>
          </Menu>
        </header>

        <main className="pt-16 pb-20 lex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
          {children}
        </main>

        <footer className="fixed bottom-0 left-0 bg-black w-full p-4 border-t-2">
          <div className="flex flex-col gap-4 justify-evenly items-center text-center text-sm sm:text-base md:text-lg">
            <div>
              <p>
                {`Copyright © 2024 Stablo. All rights reserved.`}
              </p>
            </div>
            <ThemeButton />
          </div>
        </footer>
      </body>
    </html>
  )
}
