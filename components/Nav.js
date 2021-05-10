
import Link from 'next/link'

import theme from '../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const items = [
  // { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'CV', href: '/benjamin-havery-cv.pdf', external: true },
]

const Nav = ({ navState, router }) => {
  return (

    <nav className={`nav ${navState.open ? 'open' : ''}`}>
      <ul className='list'>
        { items.map(item => <Item key={ item.href } {...{ ...item, router }}>{ item.title }</Item> )}
      </ul>


      <style jsx>{`

        .nav {
          text-align: right;
        }

        .list {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-end;
          justify-content: flex-start;
        }

        @media ${media.down.md} {
          .nav:not(.open) {
            display: none;
          }
        }
        @media ${media.up.lg} {
          .list {
            display: flex;
            flex-flow: row nowrap;
          }
          
        }
      `}</style>
    
    </nav>
  )
}

const Item = ({ children, router, href, external = false }) => {
  const isCurrent = href === router.asPath;
  
  return (

    <li className={'item'}>
      { external 
        ? <a  className='link' {...{ href }}>{ children }</a>
        : <Link {...{ href }}><a className='link'>{ children }</a></Link>
      }

      { isCurrent && <span className='current'/> }


      <style jsx>{`

        .item {
          position: relative;
          margin: ${air/2}px 0 0;
        }
        .current {
          position: absolute;
          display: block;
          height: ${2*lin}px;
          width: ${2*lin}px;
          top: ${font.height/2}px;
          left: -${air/3}px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: ${color.white};
        }

        @media ${media.up.lg} {

          .item {
            margin: 0 0 0 ${air/2}px;
          }
          .current {
            top: auto;
            left: 50%;
            bottom: -${air/2.5}px;
          }
        }
      `}</style>
    
    </li>
  )
}

export default Nav