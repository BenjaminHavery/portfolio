
import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      tColor = color.dep;

const Links = ({ links = [] }) => {
  // console.log(links);
  if (!links.length) return null;
  return (<>
    <h3>Links</h3>
    <ul className={`links`}>
      {/* { links.map(( link, key ) => !!link && <li className='link' {...{ key }}><a href={link} target='_blank'>{ link }</a></li> )} */}
      { links.map(( link, key ) => <Item {...{ key, link }}/> )}

      <style jsx>{`
        .links {
          list-style: none;
        }
        ul.links:last-child {
          margin-bottom: 0;
        }

        .link {
        }
      `}</style>
    </ul>
  </>)
}

const Item = ({ link: linkRaw }) => {
  if (!linkRaw) return null;

  const link = typeof linkRaw === 'string' ? { text: linkRaw, url: `https://${linkRaw}` } : linkRaw;
  return (<>
    <li className='link'>
      <a href={ link.url } target='_blank'>{ link.text }</a>

      <style jsx>{`
        .link {
        }
      `}</style>
    </li>
  </>)
}



export default Links