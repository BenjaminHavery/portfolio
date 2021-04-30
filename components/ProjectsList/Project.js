
import Details from './Details'
import Tags from './Tags'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Project = ({ brief, deets, langs, tools }) => {
  return (<>
    <Tags tags={ brief }/>

    <h3 className='tight-t'>The project</h3>
    <Details {...{ deets }}/>

    <Tags title='Languages' tags={ langs }/>
    <Tags title='Tools' tags={ tools } className='tools'/>

    
    <style jsx>{`
        :global(.tools.heading) {
          margin-top: ${air/4}px;
        }  
      `}</style>
  </>)
}

export default Project
