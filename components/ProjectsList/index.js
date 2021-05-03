
import { useState } from 'react'
import { items, projects } from './data'

import List from './List'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const defaultSort = 'chronology';

const ProjectsList = () => {

  const [view, setView] = useState({ employers: true, sort: defaultSort, });
  
  return (
  <div className='projects-list'>
    <div className='controls'>
      <button className='button' onClick={() => setView({ ...view, employers: !view.employers })}>{ view.employers ? 'Hide' : 'Show'} employers</button>
      {/* <button onClick={() => setView({ ...view, sort: view.sort === defaultSort ? 'title' : defaultSort })}>Sorted by { view.sort }</button> */}
    </div>
    
    <List items={ view.employers ? items : projects } {...{ view }}/>

    <style jsx>{`
      .projects-list {
        max-width: 800px;
      }
      .controls .button {
        margin-bottom: ${air/2}px;
      }
    `}</style>
  </div>)
}


export default ProjectsList