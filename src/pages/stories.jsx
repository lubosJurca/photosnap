import { Link } from "react-router-dom"

// materialUi
import EastIcon from '@mui/icons-material/East';

// data
import { data } from "../assets/data"

// components
import Story from "../components/Story";

// framer-motion
import { motion as m } from "framer-motion";

function Stories() {
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <section className='big-story' >

        <div className='stories-wrapper'>
          <h6>LAST MONTH’S FEATURED STORY</h6>
          <h1>HAZY FULL <br /> MOON OF <br/> APPALACHIA</h1>
          <div className="author-info">
            <p>March 2nd 2020</p>
            <figcaption>by John Appleseed</figcaption>
          </div>   
          <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
          <Link to="stories-link">READ THE STORY <EastIcon /></Link>
        </div>


        </section>
        <section className='dark-story' >

        <div className='dark-wrapper'>
          <h6>LAST MONTH’S FEATURED STORY</h6>
          <h1>HAZY FULL <br /> MOON OF <br/> APPALACHIA</h1>
          <div className="author-info">
            <p>March 2nd 2020</p>
            <figcaption>by John Appleseed</figcaption>
          </div>   
          <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
          <Link to="stories-link">READ THE STORY <EastIcon /></Link>
        </div>


        </section>
        <section className="stories">
          {data.map((item) => {
            return <Story key={item.id} data={item} />
          })}
        </section>
    </m.div>
    
  )
}

export default Stories