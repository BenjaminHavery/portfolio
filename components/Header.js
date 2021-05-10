
import Link from 'next/link'
import Hamburger from './Hamburger'
import Nav from './Nav'

import theme from '../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Layout = ({ title, navState, router }) => {
  return (

    <div className='header'>
      <div className='top'>
        <Link href="/"><a className='logo'>{ site.title }</a></Link>
        { !!title && <h1 className='title'>{ title }</h1> }
        <Hamburger size={28} barColor={color.white} {...{ ...navState }}/>
      </div>

      <Nav {...{ navState, router }}/>

{/* 
      <nav className={`nav ${navState.open ? 'open' : ''}`}>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href='/projects'><a>Projects</a></Link></li>
          <li><a href='/benjamin-havery-cv.pdf'>CV</a></li>
        </ul>
      </nav> */}


      <style jsx>{`

        .header {
          padding: ${dim.air/2}px;
          color: ${color.white};
          background: linear-gradient(135deg, ${color.req} 0%, ${color.dep} 100%);
        }

        .top {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }

        .logo {
          font-family: ${font.heading};
          font-size: 2rem;
          line-height: 1;
          text-decoration: none;
        }
        .logo, .logo:active, .logo:focus { color: ${color.white} }

        .title {
          display: none;
          margin: 0 0 0 ${dim.air}px;
          font-family: ${font.main};
          font-size: 1.3rem;
          line-height: 1;
          font-style: italic;
          text-decoration: none;
        }

        .header :global(.hamburger) {
          margin-left: auto;
        }

        nav {
          text-align: right;
        }



        @media ${media.up.sm} {  
          .title { display: block }
        }

        @media ${media.up.md} {  
          .header {
            padding: ${dim.air/2}px ${dim.air}px;
          }
        }

        @media ${media.up.lg} {

          .header {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
          }
          .header :global(.hamburger) { display: none }
          
        }
        
        @media ${media.up.xl} {
          .header {
            padding-left: calc(50vw - ${media.xl/2 - air}px);
            padding-right: calc(50vw - ${media.xl/2 - air}px);
          }
          
        }
      `}</style>
      
    </div>
  )
}

export default Layout