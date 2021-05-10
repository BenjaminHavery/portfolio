
import { FaExpandAlt, FaCompressAlt, FaEye, FaEyeSlash, FaPlus, FaTrashAlt } from 'react-icons/fa';
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
      
      <div className='buttons'>
        <button onClick={() => toggleExpandAll()}>{ !!view.open.length ? <FaCompressAlt/> : <FaExpandAlt/>} All</button>
        <button onClick={() => toggleEmployers()}>{ view.employers ? <FaEyeSlash/> : <FaEye/>} Employers</button>
        <button onClick={() => toggleUseFilter()}>{ view.filter ? <FaTrashAlt/> : <FaPlus/>} Filter</button>
      </div>
      
      
      <Filter {...{ view, setView }}/>


      <style jsx>{`

        .controls {
        }
        .buttons {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: flex-end;
          margin-right: -${air/2}px;
        }
        .buttons button {
          margin-bottom: ${air/2}px;
          margin-right: ${air/2}px;

          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          flex: 0 0 auto;
          color: ${color.emp};
          border-color: ${color.emp};
          font-weight: bold;
        }
        .buttons :global(svg) { margin-right: ${air/4}px }

        @media ${media.up.lg} {
         
          .controls {
            padding: ${air}px ${air}px ${air/2}px 0;
          }
          .buttons {
            flex-wrap: nowrap;
          }
          .buttons button {
            flex: 1 0 auto;
          }
        }
      `}</style>
    </div>
  )
}


export default Controls