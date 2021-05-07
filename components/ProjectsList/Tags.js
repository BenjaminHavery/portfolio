
import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      tColor = color.dep;

const Tags = ({ title = '', tags = [], className = '', view, setView }) => {
  return (<>
    { !!title.length && <h3 className={`heading ${className}`}>{ title }</h3> }
    <ul className={`tags ${className}`}>
      { tags.map(( tag, key ) => <Tag {...{ tag, key, view, setView }}/> )}

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


const Tag = ({ tag, view, setView = false }) => {
  
  if (!tag.used) return null;

  const active = !view.filter || view.filterBy.includes(tag.id),
        toggleActive = () => {
          if (!setView) return
          if (active) setView({...view, filterBy: view.filterBy.split(',').filter(id => id !== tag.id).join() })
          else setView({...view, filterBy: [...view.filterBy.split(','), tag.id].join() })
        }

  return (
    <li
      className={`tag ${ active ? 'active' : '' }`}
      onClick={() => toggleActive()}
      >
      { tag.title }
      
      <style jsx>{`
        .tag {
          flex: 0 1 auto;
          margin: 0 ${air/4}px ${air/4}px 0;
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
const TagOther = ({ tag, view, setView }) => {
  const active = view.filterBy.includes(tag.id),
        toggleActive = () => {
          if (active) setView({...view, filterBy: view.filterBy.split(',').filter(id => id !== tag.id).join() })
          else setView({...view, filterBy: [...view.filterBy.split(','), tag.id].join() })
        }

  return (
    <li onClick={() => toggleActive()}>
      { tag.title } { active ? '#' : '' }
    </li>
  )
}
