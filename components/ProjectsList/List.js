
import Item from './Item'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const List = ({ items = [], level = 1, view, setView }) => {

  const isOpen = (item) => view.open.includes(item.id);
  const toggleOpen = (item) => {
    console.log('toggle open', item);
  }

  return !items.length ? null : (

    <ul className={`list level--${ level } hide-scrollbar`}>
      
      { items.map((item, key) => <Item open={isOpen(item)} toggleOpen={() => toggleOpen(item)} {...{ key, item, level, view, setView }}/> )}

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
