import { useState } from "react"
import { Link } from "react-router-dom"

// mui icons
import EastIcon from '@mui/icons-material/East';

// images
import pricing from "../assets/images/pricing.jpg"
import Switch from "../components/Switch"

// data
import { tableData } from "../assets/tableData"

// components
import BasicTable from "../components/Table"
import SmallTable from "../components/SmallTable";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true)

  const toggle = () => {
    setIsMonthly(prevState => !prevState)
  }


  return (
    <>
      <section className="features-header">
        <div className="features-info">
          <h1>PRICING</h1>
          <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
        </div>
        <img src={pricing} alt="pricing" />
      </section>

      <section className="plan">
        <div className="switch-plan">
          <h2 className={isMonthly ? null : "light"}>Monthly</h2>
          <Switch isMonthly={isMonthly} toggle={toggle} />
          <h2 className={isMonthly ? "light" : null}>Yearly</h2>
        </div>
       
        <div className="price-container">
          <div className="plan-offer">
            <h4>Basic</h4>
            <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
            <div className="price">
              <h2>{isMonthly ? "$19.00" : "$190.00"}</h2>
              <small>per month</small>
            </div>
            <button className="plan-btn">PICK PLAN</button>
          </div>
          <div className="plan-offer">
            <h4>Pro</h4>
            <p>More advanced features available. Recommended for photography veterans and professionals.</p>
            <div className="price">
              <h2>{isMonthly ? "$39.00" : "$390.00"}</h2>
              <small>per month</small>
            </div>
            <button className="plan-btn">PICK PLAN</button>
          </div>
          <div className="plan-offer">
            <h4>Business</h4>
            <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
            <div className="price">
              <h2>{isMonthly ? "$99.00" : "$990.00"}</h2>
              <small>per month</small>
            </div>
            <button className="plan-btn">PICK PLAN</button>
          </div>
        </div>
        
      </section>

      <section className="table">
        <h2>COMPARE</h2>
        <BasicTable data={tableData}/>
      </section>

      <section className="small-table">
        <h2>THE FEATURES</h2>
        {tableData.map((item) => {
          return <SmallTable key={item.id} data={item} />
        }         
        )}
      </section>

      <section className="beta-invite">
          <h2>We’re in beta. Get your invite today!</h2>
          <Link to="#" >GET AN INVITE <EastIcon /></Link>
      </section>  
    </>
    
  )
}

export default Pricing