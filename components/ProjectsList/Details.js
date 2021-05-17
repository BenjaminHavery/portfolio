
import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;

const Details = ({ deets = false }) => {
  if (!deets) return null;
  return (
    <div className='details'>
      { typeof deets === 'string'
        ? <p>{ deets }</p>
        : deets
      }
      
    <style jsx>{`
      
      @media ${media.up.lg} {

      }
    `}</style>
    </div>
  )
}

export default Details
