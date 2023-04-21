import '@/styles/globals.css'

import type { ReactNode } from "react"
import type { RootState } from '@/redux/store'

import type { AppProps } from 'next/app'

import { Provider, useSelector } from 'react-redux'
import { store } from '@/redux/store'

import { isDarkThemeActive } from '@/redux/slices/app.slice'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Props = {
  children: ReactNode
}

const ThemeContainer = (props: Props) => {
  const isDarkModeActive = useSelector(isDarkThemeActive);

  return (
    <div data-theme={isDarkModeActive ? "dark" : "light"}>
        {props.children}
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeContainer>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
        </ThemeContainer>
    </Provider>
  )
}
