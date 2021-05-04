
import { useState } from 'react'
import { employers, items, projects, brief, langs, tools } from './data'

import List from './List'
import Filter from './Filter'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const defaultSort = 'chronology';

const ProjectsList = () => {

  const [view, setView] = useState({ employers: true, sort: defaultSort, open: [], filter: false });
  
  return (
  <main className='projects-list main'>
    <div className='controls'>
      <button className='button' onClick={() => !!view.open.length ? setView({...view, open: []}) : setView({...view, open: [...projects, ...employers].map(i => i.id)})}>{ !!view.open.length ? 'Colapse' : 'Expand'} all</button>
      <button className='button' onClick={() => setView({...view, employers: !view.employers })}>{ view.employers ? 'Hide' : 'Show'} employers</button>
      {/* <button className='button' onClick={() => setView({...view, filter: !view.filter })}>{ view.filter ? 'Remove' : 'Apply'} filter</button>
      <Filter {...{ view, setView, brief, langs, tools }}/> */}
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
        flex: 0 0 auto;
        margin-bottom: ${air/2}px;
        margin-right: ${air/2}px;
        color: ${color.emp};
        border-color: ${color.emp};
        font-weight: bold;
      }

      
      @media ${media.up.lg} {
        main.projects-list.main {
          display: grid;
          overflow: hidden;
          grid-template-columns: auto 1fr auto;
          grid-template-rows: auto;
          padding: 0;
        }
        .controls {
          grid-column: 2;
          grid-row: 1;
          display: block;
          padding: ${air}px;
          padding-left: 0;
        }
        .projects-list > :global(.list) {
          overflow-y: auto;
          grid-column: 1;
          grid-row: 1;
          width: 750px;
          padding: ${air}px;
          flex: 0 0 auto;
        }
      }
      @media ${media.up.xl} {
        .projects-list > :global(.list) {
          width: 850px;
        }
      }
    `}</style>
  </main>)
}


export default ProjectsList