
import { useState } from 'react'

import List from './List'
import Tags from './Tags'
import Project from './Project'
import Employer from './Employer'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      pColor = color.dep,
      eColor = color.req;


const Item = ({ item, level, view, setView }) => {

  const open = view.open.includes(item.id),
        toggleOpen = () => {
          if (open) setView({...view, open: view.open.filter(id => id !== item.id)});
          else setView({...view, open: [...view.open, item.id]});
        };

  return (
    <li className={`item level--${ level } type--${ item.type }`}>

      <div className='header' onClick={() => toggleOpen()}>
        <h2 className='heading'>{ item.title }</h2>
        {/* <button className='button' onClick={() => setOpen(!open)}>Details</button> */}
      </div>
      <div className='content'>

        { item.type === 'project' && <Project {...{ ...item, open }}/> }
        { item.type === 'employer' && <Employer {...{ ...item, open }}/> }

        { !open && <button className='button' onClick={() => toggleOpen()}>...</button> }
      </div>

      <List items={ item.projects } level={ level + 1} {...{ view, setView }}/>

      <style jsx>{`

        .item {
          position: relative;
          margin: ${air/2}px 0 0;
          border-left: ${lin}px solid ${pColor};
          border-top-left-radius: ${rad}px;
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
        .item:first-child { margin-top: 0 }

        .header {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          padding: ${air/3}px ${air/2}px;
          color: ${color.white};
          background-color: ${pColor};
          border-top-left-radius: ${rad - lin}px;
          cursor: pointer;
        }
        .type--employer > .header { background-color: ${eColor} }

        .heading { margin: 0 }
        //.button {
        //  margin: -${air/4}px 0;
        //  padding: ${air/6}px ${air/3}px;
        //  border-color: ${color.white};
        //  border-radius: ${rad/2}px;
        //}

        .button {
          display: block;
          width: 100%;
          margin: -${air/3}px 0 -${air/6}px;
          padding: 0;
          border: none;
        }

        .content {
          padding: ${air/2}px;
          background-image: linear-gradient(to bottom, ${color.white}, transparent);
        }
        .content > :global(*:last-child) { margin-bottom: 0 }

        .item > :global(.list) {
          padding-left: ${air/2}px;
        }
        .item > :global(.list) > :global(.item:before) { content: '' }

        
        @media ${media.up.md} {
          
          .item:before {
            left: -${air + lin}px;
//            height: ${lin*5}px;
            width: ${air}px;
          }
          .header, .content {
            padding-left: ${air}px;
            padding-right: ${air}px;
          }


          .item > :global(.list) {
            padding-left: ${air}px;
          }
        }
      `}</style>
    </li>
  )
}

export default Item
