
import theme from '../styles/theme'
const { font, dim, dim: { air, base }, color } = theme;


const GlobalStyles = () => <style global jsx>{`

html, body {
  font-family: ${font.main};
  font-size: ${font.size}px;
  line-height: ${font.height}px;
}

h1, h2, h3, h4, h5 {
  line-height: 1;
  margin: ${air/2}px 0 ${base/2}px;
}
h1, h2 {
  font-family: ${font.heading};
  font-weight: normal;
}
h3, h4, h5 {
  font-family: ${font.main};
  font-weight: bold;
}
h1 { font-size: 2rem }
h2 { font-size: 1.3rem }
h3 { font-size: 1.1rem }

p { margin-bottom: ${base/2}px }
button {
  padding: ${dim.air/4}px ${dim.air/2}px;
  border: ${dim.lin}px solid ${color.text};
}

.tight { margin: 0 } .tight-t { margin-top: 0 } .tight-l { margin-left: 0 } .tight-r { margin-right: 0 } .tight-b { margin-bottom: 0 }

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar { display: none } /* Chrome, Safari and Opera */

`}</style>


export default GlobalStyles