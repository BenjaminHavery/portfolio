
import Link from 'next/link'
import { FaCloudDownloadAlt } from 'react-icons/fa';

import theme from '../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const items = [
  // { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  // { title: 'CV', href: '/benjamin-havery-cv.pdf', external: true },
]

const Nav = ({ navState, router }) => {
  return (

    <nav className={`nav ${navState.open ? 'open' : ''}`}>
      <ul className='list'>
        { items.map(item => <Item key={ item.href } {...{ ...item, router }}>{ item.title }</Item> )}
        
        <Item
          href='/benjamin-havery-cv.pdf'
          external={true}
          {...{ router }}
          >
          <FaCloudDownloadAlt style={{ marginRight: '5px' }}/>
          CV
        </Item>
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

    <li className={`item ${isCurrent ? 'active' : ''}`}>
      { external 
        ? <a  className='link' {...{ href }}>{ children }</a>
        : <Link {...{ href }}><a className='link'>{ children }</a></Link>
      }

      <span className='current'/>


      <style jsx>{`

        .item {
          position: relative;
          margin: ${air/2}px 0 0;
          padding: 0;
        }
        .item.active { pointer-events: none }
        .item:before { display: none }

        .link {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }

        .current {
          position: absolute;
          display: none;
          height: ${2*lin}px;
          width: ${2*lin}px;
          top: ${font.height/2}px;
          left: -${air/3}px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: ${color.white};
        }
        .active .current { display: block; }

        @media ${media.up.lg} {

          .item {
            margin: 0 0 0 ${air}px;
          }
          .item:hover .current { display: block }

          .current, .focus {
            top: calc(100% + ${air/4}px);
            left: 50%;
            // bottom: -${air/2.5}px;
          }
        }
      `}</style>
    
    </li>
  )
}

export default Nav