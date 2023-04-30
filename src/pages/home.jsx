import { Link } from "react-router-dom"

// materialUi
import EastIcon from '@mui/icons-material/East';

// images
import section1 from "../assets/images/section1.jpg"
import section2 from "../assets/images/section2.jpg"
import section3 from "../assets/images/section3.jpg"

// data
import { data } from "../assets/data"
import { feauturesData } from "../assets/featuresData"

// components
import Box from "../components/Box";
import Feature from "../components/Feature";

// styles
const style = {
  fontSize: "1.5rem"
}

const styleLink ={
  color: "#FFFFFF"
}


function Home() {
  return (
    <main>

      <section className="container">
        <div className='info black'>
            <h1>Create and share your photo stories</h1>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell  stories and connect with others.</p>
            <Link style={styleLink} to="#" >GET AN INVITE <EastIcon style={style} /></Link>
        </div>
        <img src={section1} alt='photographer' />

      </section>

      <section className="container">
        <div className='info'>
            <h1>Beautiful stories every time</h1>
            <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
            <Link to="stories">VIEW THE STORIES <EastIcon  /></Link>
        </div>
        <img src={section2} alt="art"/>
      </section>

      <section className="container">
        <div className='info'>
            <h1>Designed for everyone</h1>
            <p>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
            <Link to="stories">VIEW THE STORIES <EastIcon /></Link>
        </div>
        <img src={section3} alt="photorgrapher"/>
      </section>

      <section className="photos">
        {data.slice(0,4).map((item) => {
          return <Box key={item.id} data={item} />
        })}
      </section>
      
      <section className="details">
        {feauturesData.slice(0,3).map((item) => {
          return <Feature key={item.id} data={item} />
        })}
      </section>
      
    </main>
  )
}

export default Home