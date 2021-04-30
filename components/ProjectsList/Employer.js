
import Details from './Details'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Employer = ({ deets }) => {
  return (<>
    <Details {...{ deets }}/>
  </>)
}

export default Employer
