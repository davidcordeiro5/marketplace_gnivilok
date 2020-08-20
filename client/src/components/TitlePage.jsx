import React from 'react'
import { H2 } from '@bootstrap-styled/v4'

const theme = {
  '$font-size-h2': '2rem',
  '$headings-font-weight': 'bold',
  '$headings-color': '#313131'
}
const TitlePage = ({title}) => {
  return (
    <H2 theme={theme}>{title}</H2>
  )
}

export default TitlePage
