import React from "react"

/** Box: diaplays a div with a background color, width, and height based on the props passed to it */
const Box = ({ id, width, height, backgroundColor, removeBox }) => {
    return (
        <div>
            <div
                data-testid="box"
                id={id}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: backgroundColor,
                }}
            ></div>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    )
}

export default Box