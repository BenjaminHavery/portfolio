
import Tags from './Tags'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

import { brief, tools, langs } from './data'

const Filter = ({ view, setView }) => {
  return view.filter ? (
    <div className='filter'>
      <Tags title='Brief' tags={ brief } {...{ view, setView }}/>
      <Tags title='Languages' tags={ langs } {...{ view, setView }}/>
      <Tags title='Tools' tags={ tools } {...{ view, setView }}/>
      
      <style jsx>{`
        
        .filter {
          margin: 0 ${air/2}px ${air/2}px 0;
          padding: 0 ${air/2}px;
          border: ${lin}px solid ${color.pro};
        }

        .filter > :global(.tags .tag) { cursor: pointer }

      `}</style>
    </div>
  ) : null
}

export default Filter
