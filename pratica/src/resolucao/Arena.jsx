import React from "react"

const Arena = ({ children, arena }) => {
  return (
    <div className="d-flex justify-content-around align-items-center" style={{ padding: "2rem" }}>
      {
        React.Children.map(children, (combatente) => {
          return (
            React.cloneElement(combatente, {arena})
          )
        })
      }
    </div>
  )
}

export default Arena