
import { useState } from 'react'

import List from './List'
import Controls from './Controls'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

import { items, projects, tags } from './data'


const ProjectsList = () => {

  const [view, setView] = useState({ employers: true, open: [], filter: false, filterBy: tags[1].id, filterStrict: false });

  
  return (
  <main className='projects-list main'>

    <Controls {...{ view, setView }}/>
    <List items={ view.employers ? items : projects } {...{ view, setView }}/>


    <style jsx>{`
      
      @media ${media.up.lg} {

        main.projects-list.main {
          display: grid;
          overflow: hidden;
          grid-template-columns: auto 1fr auto;
          grid-template-rows: auto;
          padding: 0;
        }

        .projects-list > :global(.controls) {
          overflow-y: auto;
          grid-column: 2;
          grid-row: 1;
          height: 100%;
        }

        .projects-list > :global(.list) {
          overflow-y: auto;
          grid-column: 1;
          grid-row: 1;
          width: 750px;
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
