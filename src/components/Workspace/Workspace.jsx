import "./Workspace.css"
import Artboard from "./Artboard/Artboard";
import { useEffect, useState } from "react";


const Workspace = () => {

  const [artboardStyle, setArtboardStyle] = useState({
    scale: 66,
    pos: {
      x: 50,
      y: 50
    },
  });


  return (
    <main className="workspace">
      {artboardStyle && <Artboard artboardStyle={artboardStyle} />}
    </main>
  )
}

export default Workspace;