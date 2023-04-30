import { Link } from 'react-router-dom'

// materialUi
import EastIcon from '@mui/icons-material/East';

function Story({data}) {
  return (
    <div className="story-box" style={{backgroundImage: `${data.background}`}}>
        <h6>{data.date}</h6>
        <h3>{data.title}</h3>
        <figcaption>{data.author}</figcaption>
        <Link to="#">READ STORY <EastIcon /></Link>
    </div>
  )
}

export default Story