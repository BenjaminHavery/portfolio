
import Tags from './Tags'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

import { brief, tools, langs } from './data'

const Filter = ({ view }) => {

  const toggleFilterStrict = (fs = !view.filterStrict) => fs === view.filterStrict ? null : view.set({ filterStrict: fs });
  
  return view.filter ? (
    <div className='filter'>
      <h3>Filter mode</h3>
      <button className={`button ${view.filterStrict ? 'active' : ''}`} onClick={() => toggleFilterStrict(true)}>And</button>
      <button className={`button ${view.filterStrict ? '' : 'active' }`} onClick={() => toggleFilterStrict(false)}>Or</button>
      <Tags title='Brief' tags={ brief } {...{ view }}/>
      <Tags title='Languages' tags={ langs } {...{ view }}/>
      <Tags title='Tools' tags={ tools } {...{ view }}/>
      
      <style jsx>{`
        
        .filter {
          margin: 0 0 ${air/2}px;
          padding: 0 ${air/2}px;
          border: ${lin}px solid ${color.pro};
        }
        .filter > :global(.tags .tag) { cursor: pointer }

        .button {
          flex: 0 1 auto;
          margin: 0 ${air/4}px ${air/4}px 0;
          padding: ${air/8}px ${air/3}px;
          border: ${lin}px solid ${color.emp};
          border-radius: ${rad/2}px;
        }
        .active {
          color: ${color.white};
          background-color: ${color.emp};
        }

      `}</style>
    </div>
  ) : null
}

export default Filter
