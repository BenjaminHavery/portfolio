
import { useState } from 'react'

import Details from './Details'
import Tags from './Tags'
import Links from './Links'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      pColor = color.dep,
      eColor = color.req;

const Project = ({
  brief, deets, langs, tools, links,
  open, setOpen
}) => {

  return (<>
    <Tags tags={ brief }/>

    { open
      ? <>
        <h3 className='tight-t'>The project</h3>
        <Details {...{ deets }}/>

        <Tags title='Languages' tags={ langs }/>
        <Tags title='Tools' tags={ tools } className='tools'/>
        <Links {...{ links }}/>
        {/* { !!links.length && <>
          <h3>Links</h3>
          <ul>
            { links.map(link => <li><a href={link} target='_blank'>{link}</a></li>)}
          </ul>
        </>} */}
      </> : <>
        <button className='button' onClick={() => setOpen(true)}>...</button>
      </>
    }

    
    <style jsx>{`
        :global(.tools.heading) {
          margin-top: ${air/4}px;
        }

        .button {
          width: 100%;
          padding: 0;
          border: none;
        }
      `}</style>
  </>)
}

export default Project
