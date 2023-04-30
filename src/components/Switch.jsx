

function Switch({ isMonthly,toggle }) {
  
  return (
    <div className={`switch ${!isMonthly ? "yearly" : null}`}>
        <div onClick={toggle} className={`wheel ${!isMonthly ? "yearly-wheel" : null}`}></div>
    </div>
  )
}

export default Switch