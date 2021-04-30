
// import Link from 'next/link'
import Head from 'next/head'

import GlobalStyles from '../styles/Global'

import theme from '../styles/theme'
const { site, color, dim, media, font, dur } = theme;

const Layout = ({ title, children, tint = color.active }) => {

  return (
    <div className='layout'>
      
      <Head>
        <title>{ site.title }{ !!title ? `: ${ title }` : '' }</title>
      </Head>

      <div className='header'>
        {/* <Link href="/"><a className='logo'>{ site.title }</a></Link> */}
        <span className='logo'>{ site.title }</span>
        { !!title && <h1 className='title'>{ title }</h1> }
      </div>
      
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

        .header {
          grid-column: 1;
          grid-row: 1;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding: ${dim.air/2}px;
          color: ${color.white};
          background: linear-gradient(135deg, ${color.req} 0%, ${color.dep} 100%);
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


        @media ${media.up.lg} {  
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