
import { useListItemBool } from '../util'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      tColor = color.dep;

const Tags = ({ title = '', tags = [], className = '', view }) => {
  return (<>
    { !!title.length && <h3 className={`heading ${className}`}>{ title }</h3> }

    <ul className={`tags ${className}`}>
      { tags.map(tag => <Tag key={tag.id} {...{ tag, view }}/> )}

      <style jsx>{`
        .tags {
          list-style: none;
          display: flex;
          flex-flow: row wrap;
          margin: 0 -${air/4}px ${air/4}px 0;
        }
      `}</style>
    </ul>
  </>)
}

export default Tags


const Tag = ({ tag, view }) => {
  
  const [active, toggleActive] = useListItemBool(view.filterBy, tag.id, (list) => view.set({ filterBy: list })),
        isActive = !view.filter || active,
        
        El = view.filter ? 'button' : 'span';

  
  if (!tag.used) return null;
  return (
    <li className='item'>
      <El
        className={`tag ${ isActive ? 'active' : '' }`}
        onClick={view.filter ? () => toggleActive() : null}
        >
        { tag.title }
      </El>
      
      <style jsx>{`
        .item {
          flex: 0 1 auto;
          margin: 0 ${air/4}px ${air/4}px 0;
          padding: 0;
        }
        .tag {
          display: block;
          padding: ${air/8}px ${air/3}px;
          border: ${lin}px solid ${tColor};
          border-radius: ${rad/2}px;
        }
        .active {
          color: ${color.white};
          background-color: ${tColor};
        }
      `}</style>
    </li>
  )
}
