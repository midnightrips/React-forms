import React, { useState } from "react"

/** NewBoxForm: renders a form that when submitted creates a new Box */
const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE); //clear input values once submitted
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="backgroundColor">Background Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm