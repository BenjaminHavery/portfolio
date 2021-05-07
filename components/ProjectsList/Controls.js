
import Filter from './Filter'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

import { employers, projects } from './data'


const Controls = ({ view, setView }) => {

  const toggleExpandAll = () => {
    if (view.open.length) setView({...view, open: []})
    else setView({...view, open: [...projects, ...employers].map(i => i.id)})
  }
  const toggleEmployers = () => setView({...view, employers: !view.employers })
  const toggleUseFilter = () => setView({...view, filter: !view.filter })
  
  return (
    <div className='controls hide-scrollbar'>
      
      <button className='button' onClick={() => toggleExpandAll()}>{ !!view.open.length ? 'Colapse' : 'Expand'} all</button>
      <button className='button' onClick={() => toggleEmployers()}>{ view.employers ? 'Hide' : 'Show'} employers</button>
      <button className='button' onClick={() => toggleUseFilter()}>{ view.filter ? 'Remove' : 'Apply'} filter</button>
      
      <Filter {...{ view, setView }}/>


      <style jsx>{`

        .controls {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: flex-end;
          margin-right: -${air/2}px;
        }
        .controls > :global(*) {
          margin-bottom: ${air/2}px;
          margin-right: ${air/2}px;
        }

        .button {
          flex: 0 0 auto;
          color: ${color.emp};
          border-color: ${color.emp};
          font-weight: bold;
        }

        @media ${media.up.lg} {
         
          .controls {
            display: block;
            padding: ${air}px ${air}px ${air/2}px 0;
          }
        }
      `}</style>
    </div>
  )
}


export default Controls