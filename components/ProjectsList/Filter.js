
import { useState } from 'react'

import theme from '../../styles/theme'
const { site, color, dim, dim: { air, lin, rad }, media, font, dur } = theme;


const Filter = ({
  view, setView,
  brief, langs, tools,
}) => {

  return view.filter ? (
    <div>
      <p>Filter comp</p>
    </div>
  ) : null
}

export default Filter
