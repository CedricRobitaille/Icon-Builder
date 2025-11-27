import "./Artboard.css";

const Artboard = ({ artboardStyle }) => {

  const artboardComputeStyle = {
    height: `${artboardStyle?.scale ?? 50}%`,
  }

  return (
    <div className="artboard" style={artboardComputeStyle}>

    </div>
  )
}

export default Artboard;
