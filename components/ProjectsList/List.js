
import Item from './Item'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const List = ({ items = [], level = 1, view }) => {

  return !items.length ? null : (

    <ul className={`list level--${ level } hide-scrollbar`}>
      
      { items.map(item => <Item key={item.id} {...{ item, level, view }}/> )}

      <style jsx>{`
        @media ${media.up.lg} {
          .list.level--1 {
            padding: ${air}px;
          } 
        }
      `}</style>
    </ul>
  )
}

export default List
