
import { useState } from 'react'
import { employers, items, projects } from './data'

import List from './List'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const defaultSort = 'chronology';

const ProjectsList = () => {

  const [view, setView] = useState({ employers: true, sort: defaultSort, open: [] });
  
  return (
  <div className='projects-list'>
    <div className='controls'>
      <button className='button' onClick={() => !!view.open.length ? setView({...view, open: []}) : setView({...view, open: [...projects, ...employers].map(i => i.id)})}>{ !!view.open.length ? 'Colapse' : 'Expand'} all</button>
      <button className='button' onClick={() => setView({...view, employers: !view.employers })}>{ view.employers ? 'Hide' : 'Show'} employers</button>
      {/* <button onClick={() => setView({ ...view, sort: view.sort === defaultSort ? 'title' : defaultSort })}>Sorted by { view.sort }</button> */}
    </div>
    
    <List items={ view.employers ? items : projects } {...{ view, setView }}/>

    <style jsx>{`
      .projects-list {

      }
      .controls {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: flex-end;
        margin-right: -${air/2}px;
      }
      .controls .button {
        margin-bottom: ${air/2}px;
        margin-right: ${air/2}px;
        color: ${color.emp};
        border-color: ${color.emp};
        font-weight: bold;
      }

      
      @media ${media.up.lg} {
        .projects-list {
          display: flex;
          flex-flow: row-reverse nowrap;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .controls {
          position: sticky;
          top: 0px;
          padding-left: ${air}px;
        }
        .projects-list > :global(.list) {
          flex: 1 1 auto;
          max-width: 750px;
        }
      }
    `}</style>
  </div>)
}


export default ProjectsList