import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const backColorInput = getByLabelText("Background Color");

    fireEvent.change(widthInput, { target: { value: "200" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(backColorInput, { target: { value: "blue" } });

    const btn = queryByText("Add Box");
    fireEvent.click(btn);

    const box = getByTestId("box");
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle({
        width: "200px",
        height: "100px",
        backgroundColor: "blue",
    });
})
