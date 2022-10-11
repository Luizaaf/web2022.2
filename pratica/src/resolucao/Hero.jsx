const Hero = ({ name, img, arena }) => {
  return (
    <div className="card text-center" style={{ width: "20rem" }}>
      <img
        src={img}
        className="rounded card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h2>{name}</h2>
        <p>{arena}</p>
      </div>
    </div>
  )
}

export default Hero