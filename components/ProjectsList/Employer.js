
import Details from './Details'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Employer = ({ open, deets }) => {
  return open
    ? <>
      <Details {...{ deets }}/>
    </>
    : null
}

export default Employer
