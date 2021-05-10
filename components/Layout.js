
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// import Link from 'next/link'
import Head from 'next/head'

import Header from './Header'

import GlobalStyles from '../styles/Global'
import theme from '../styles/theme'
const { site, color, dim, media, font, dur } = theme;

const Layout = ({ title, children, tint = color.active }) => {

  const [navOpen, setNavOpen] = useState(false),
        router = useRouter(),
        navState = { open: navOpen, toggle: (val = !navOpen) => setNavOpen(val) };

  useEffect(() => setNavOpen(false), [router.asPath]);


  return (
    <div className='layout'>
      
      <Head>
        <title>{ site.title }{ !!title ? `: ${ title }` : '' }</title>
      </Head>

      <Header {...{ title, router, navState }}/>

      
      { children }

      
      <GlobalStyles />

      <style jsx>{`
        .layout {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          height: 100vh;
        }
        .layout:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -30vh; left: 0; bottom: -30vh; right: 0;
          color: ${tint};
          background-color: currentColor;
          background-image: linear-gradient(to top, currentColor, ${color.white});
          opacity: 0.4;
          transition: color ${dur.fast}s ease;
        }

        .layout > :global(.header) {
          grid-column: 1;
          grid-row: 1;
        }

        .logo {
          font-family: ${font.heading};
          font-size: 2rem;
          line-height: 1;
          text-decoration: none;
        }
        .logo, .logo:active, .logo:focus { color: ${color.white} }

        .title {
          margin: 0 0 0 ${dim.air}px;
          font-family: ${font.main};
          font-size: 1.3rem;
          line-height: 1;
          font-style: italic;
          text-decoration: none;
        }
  
        .layout > :global(.main) {
          grid-column: 1;
          grid-row: 2;
          overflow: hidden auto;
          padding: ${dim.air/2}px;
        }


        @media ${media.up.md} {  
          .header {
            padding: ${dim.air/2}px ${dim.air}px;
          }
          .layout > :global(.main) {
            padding: ${dim.air}px;
          }
        }
      `}</style>
      
    </div>
  )
}

export default Layout