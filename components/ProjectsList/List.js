
import Item from './Item'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const List = ({ items = [], level = 0, view }) => {

  return !items.length ? null : (

    <ul className={`list level--${ level }`}>
      
      { items.map((item, key) => <Item {...{ key, item, level, view }}/> )}

      <style jsx>{`
        .list {
        }  
      `}</style>
    </ul>
  )
}

export default List
