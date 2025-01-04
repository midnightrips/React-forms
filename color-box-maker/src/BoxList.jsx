import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

/** BoxList: renders all of the Box components along with the NewBoxForm 
 * 
 * Main --> App --> BoxList --> Box --> NewBoxForm
*/
function BoxList() {
    const INITIAL_STATE = [
        { id: uuid(), width: "", height: "", backgroundColor: "" }
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
    }

    const removeBox = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id)); // filter so that every existing box is including except for the one clicked for removal
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, width, height, backgroundColor }) => <Box id={id} width={width} height={height} backgroundColor={backgroundColor} removeBox={removeBox} key={id} />)}
            </div>
        </div>
    )
}

export default BoxList