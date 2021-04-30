
// import theme from '../../styles/theme'
// const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Details = ({ deets = false }) => {
  if (!deets) return null;
  return typeof deets === 'string' ? <p>{ deets }</p> : deets;
}

export default Details
