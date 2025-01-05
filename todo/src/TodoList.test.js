import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new task", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Task");
    const btn = queryByText("Add Task");
    expect(queryByText('test task')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'test task' } });
    fireEvent.click(btn);
    expect(queryByText('test task')).toBeInTheDocument();

})