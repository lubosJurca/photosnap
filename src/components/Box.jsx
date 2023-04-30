import React from 'react'
import { Link } from 'react-router-dom'

// materialUi
import EastIcon from '@mui/icons-material/East';

function Box({data}) {
  return (
    <div className="box" style={{backgroundImage: `${data.background}`}}>
        <h3>{data.title}</h3>
        <figcaption>{data.author}</figcaption>
        <Link to="#">READ STORY <EastIcon /></Link>
    </div>
  )
}

export default Box

