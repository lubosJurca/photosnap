import { Link } from "react-router-dom"

// icons
import EastIcon from '@mui/icons-material/East';

// images
import features from "../assets/images/features.jpg"

// data
import { feauturesData } from "../assets/featuresData"

// components
import Feature from "../components/Feature"

// framer-motion
import { motion as m } from "framer-motion";

function Features() {
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <section className="features-header">
        <div className="features-info">
          <h1>FEATURES</h1>
          <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
        </div>
        <img src={features} alt="features" />
      </section>

      <section className="details features">
        {feauturesData.map((item) => {
          return <Feature key={item.id} data={item} />
        })}
      </section>

      <section className="beta-invite">
          <h2>We’re in beta. Get your invite today!</h2>
          <Link to="#" >GET AN INVITE <EastIcon /></Link>
      </section>  
    </m.div>   
  )
}

export default Features