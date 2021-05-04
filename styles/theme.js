
const mediaConfig = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
      media = {
        ...mediaConfig,
        up: {},
        down: {},
        only: {},
        sorted: [],
      };

media.sorted = Object.keys(mediaConfig)
  .map((key) => { return { key, width: mediaConfig[key] } })
  .sort((a, b) => a.width > b.width);

media.sorted.forEach((bp, i) => {
  const prev = media.sorted[i - 1] || false,
        next = media.sorted[i + 1] || false;
  media.up[bp.key] = !!prev ? `only screen and (min-width: ${bp.width}px)` : 'only screen';
  media.down[bp.key] = !!next ? `only screen and (max-width: ${next.width}px)` : 'only screen';
});




const theme = {
  site: {
    title: 'Ben Havery',
  },

  dim: {
    air: 32,
    rad: 12,
    lin: 2,
    block: 40,
    base: 20,
  },

  font: {
    importUrl: 'https://fonts.googleapis.com/css2?family=Orelega+One&family=Quicksand:wght@500&display=swap',
    main: `'Quicksand', sans-serif`,
    heading: `'Orelega One', cursive`,
    size: 16,
    height: 20,
  },

  color: {
    black: 'black',
    white: 'white',
    grayL1: '#F7E5E5',
    a: 'blue',
    b: 'green',

    text: 'black',

    // active: '#865CEE',
    // active: '#017f90',
    // active: '#015790',
    active: '#0c5bde',
    dep: '#d60071',
    req: '#7c2cdc',

    pro: '#d60071',
    emp: '#7c2cdc',
  },

  dur: {
    fast: 0.35,
    med: 0.5,
    slow: 1,
  },

  media: { ...media },
}

export default theme




// import { useLayoutEffect, useState } from 'react';


// export const useBreakpoints = function() {
//   const [breakpoints, setBreakpoints] = useState(['xs', 'sm']);
//   useLayoutEffect(() => {
//     function updateBreakpoint() {
//       const width = window.innerWidth,
//             newBreakpoints = theme.media.sorted.filter((b) => width >= b.width ).map((b) => b.key);
//       setBreakpoints((prev) => newBreakpoints.length === prev.length ? prev : newBreakpoints);
//     }
//     if (!!window) {
//       window.addEventListener('resize', updateBreakpoint);
//       updateBreakpoint();
//       return () => window.removeEventListener('resize', updateBreakpoint);
//     }
//   }, []);
//   return [breakpoints, breakpoints[breakpoints.length - 1]]
// }
