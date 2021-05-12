
import { useEffect, useState } from 'react'

export const useListItemBool = (
  list = [],
  item = '',
  setList = () => console.log('useListItemBool: no list setter defined'),
) => {

  const checkContains = () => list.includes(item),
        [contains, setContains] = useState(checkContains());
  
  useEffect(() => {
    // console.log('check contains');
    if (checkContains() !== contains) setContains(!contains);
  }, [list]);
  
  const toggleContains = (val = !contains) => {
    // console.log('toggle contains');
    if (val === contains) return;
    if (!!val) setList([ ...list, item ]);
    else setList( list.filter( i => i !== item ));
  };

  return [contains, toggleContains]
}


export const useListIntersectBool = (
  sub = [],
  set = [],
) => {

  const checkContains = () => {
          var matches = 0;
          sub.forEach( item => { if (set.includes(item)) matches++ })
          // console.log('checkContains', matches);
          return {
            one: matches > 0,
            all: matches === sub.length,
          }
        },
        [contains, setContains] = useState({ all: false, one: false });
  
  useEffect(() => {
    const c = checkContains();
    if ((c.one !== contains.one) || (c.all !== contains.all)) setContains(c);
  }, [sub.length]);

  return [contains.all, contains.one]
}