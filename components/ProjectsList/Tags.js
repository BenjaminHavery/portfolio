
import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme,
      tColor = color.dep;

const Tags = ({ title = '', tags = [], className = '' }) => {
  console.log(tags);
  if (!tags.length) return null;
  return (<>
    { !!title.length && <h3 className={`heading ${className}`}>{ title }</h3> }
    <ul className={`tags ${className}`}>
      { tags.map(( tag ) => !!tag && <li className='tag'>{ tag }</li> )}

      <style jsx>{`
        .tags {
          list-style: none;
          display: flex;
          flex-flow: row wrap;
          margin: 0 -${air/4}px ${air/4}px 0;
        }
        ul.tags:last-child {
          margin-bottom: -${air/4}px;
        }

        .tag {
          flex: 0 1 auto;
          margin: 0 ${air/4}px ${air/4}px 0;
          padding: ${air/8}px ${air/3}px;
          border-radius: ${rad/2}px;
          color: ${color.white};
          background-color: ${tColor};
        }
      `}</style>
    </ul>
  </>)
}

export default Tags