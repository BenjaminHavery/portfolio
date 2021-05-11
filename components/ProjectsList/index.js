
import { useState } from 'react'

import List from './List'
import Controls from './Controls'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

import { items, projects } from './data'


const ProjectsList = () => {

  const [viewState, setView] = useState({ employers: true, open: [], filter: false, filterBy: [], filterStrict: true }),
        view = { ...viewState, set: (newView) => setView({ ...viewState, ...newView, set: undefined }) };

  
  return (
  <main className='projects-list main hide-scrollbar'>

    <Controls {...{ view }}/>
    <List items={ view.employers ? items : projects } {...{ view }}/>


    <style jsx>{`
      
      @media ${media.up.lg} {

        main.projects-list.main {
          display: flex;
          overflow: hidden;
          flex-flow: row-reverse nowrap;
          margin: 0 auto;
          padding: 0;
          width: 100%;
          max-width: ${media.xl}px;
        }

        .projects-list > :global(.controls) {
          overflow-y: auto;
          grid-column: 2;
          grid-row: 1;
          height: 100%;
          width: 390px;
          flex: 0 0 auto;
        }

        .projects-list > :global(.list) {
          overflow-y: auto;
          grid-column: 1;
          grid-row: 1;
          flex: 1 1 auto;
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
