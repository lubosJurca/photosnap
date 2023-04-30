

function Feature({data}) {
  return (
    <div className="detail-box">
        <div className="info-wrapper">
            <img src={data.image} alt={`${data.title}`} />
        </div>            
        <h4>{data.title}</h4>
        <p>{data.text}</p>
    </div>
  )
}

export default Feature