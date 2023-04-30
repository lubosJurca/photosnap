

function SmallTable({data}) {
  return (
    <div className="small-container">
        <h2>{data.features}</h2>
        <div className="small-wrapper">
          <div className="small-box">
              <h4>BASIC</h4>
              <p>{data.basic}</p>
          </div>
          <div className="small-box">
              <h4>PRO</h4>
              <p>{data.pro}</p>
          </div>
          <div className="small-box">
              <h4>BUSINESS</h4>
              <p>{data.business}</p>
          </div>
        </div>
        
    </div>
  )
}

export default SmallTable