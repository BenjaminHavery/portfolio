
import { useEffect, useState } from 'react'

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

  const checkActive = () => {
    if (!view.filter) return true
    return view.filterBy.includes(tag.id)
  }

  const [active, setActive] = useState(checkActive());
  
  useEffect(() => {
    if (checkActive() !== active) setActive(!active);
  }, [view.filter, view.filterBy]);

  const toggleActive = () => {
    if (active) view.set({ filterBy: view.filterBy.filter(id => id !== tag.id) })
    else view.set({ filterBy: [...view.filterBy, tag.id] })
  }

  const El = view.filter ? 'button' : 'span';

  
  if (!tag.used) return null;
  return (
    <li
      className='item'
      >
      <El
        className={`tag ${ active ? 'active' : '' }`}
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
