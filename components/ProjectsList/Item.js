
import List from './List'
import Project from './Project'
import Employer from './Employer'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      pColor = color.dep,
      eColor = color.req;


const Item = ({ item, level, view }) => {

  return (
    <li className={`item level--${ level } type--${ item.type }`}>

      <div className='header'>
        <h2 className='heading'>{ item.title }</h2>
      </div>
      <div className='content'>
        { item.type === 'project' && <Project {...{ ...item }}/> }
        { item.type === 'employer' && <Employer {...{ ...item }}/> }
      </div>

      <List items={ item.projects } level={ level + 1} {...{ view }}/>

      <style jsx>{`

        .item {
          position: relative;
          margin: 0 0 ${air/2}px;
          border-left: ${lin}px solid ${pColor};
          border-top-left-radius: ${rad}px;
          background-image: linear-gradient(145deg, ${color.white}, transparent);
        }
        .item:before {
          position: absolute;
          pointer-events: none;
          bottom: 0;
          left: -${air/2 + lin}px;
          height: ${lin}px;
          width: ${air/2}px;
          background: linear-gradient(to right, ${eColor}, ${pColor})
        }
        .type--employer.item { border-color: ${eColor} }
        .item:last-child { margin-bottom: 0 }

        .header {
          padding: ${air/3}px ${air/2}px;
          color: ${color.white};
          background-color: ${pColor};
          border-top-left-radius: ${rad - lin}px;
        }
        .type--employer > .header { background-color: ${eColor} }

        .heading { margin: 0 }

        .content {
          padding: ${air/2}px;
        }
        .content > :global(*:last-child) { margin-bottom: 0 }

        .item > :global(.list) {
          padding-left: ${air/2}px;
        }
        .item > :global(.list) > :global(.item:before) { content: '' }
      `}</style>
    </li>
  )
}

export default Item
