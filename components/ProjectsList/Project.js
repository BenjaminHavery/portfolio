
import { useState } from 'react'

import Details from './Details'
import Tags from './Tags'
import Links from './Links'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      pColor = color.dep,
      eColor = color.req;

const Project = ({
  open = true,
  brief, deets, langs, tools, links
}) => {

  return open
    ? <>
      <Tags tags={ brief }/>
      <h3 className='tight-t'>The project</h3>
      <Details {...{ deets }}/>

      <Tags title='Languages' tags={ langs }/>
      <Tags title='Tools' tags={ tools } className='tools'/>
      <Links {...{ links }}/>

      
      <style jsx>{`
        :global(.tools.heading) {
          margin-top: ${air/4}px;
        }
      `}</style>

    </>
    : <Tags tags={ brief }/>
}

export default Project
