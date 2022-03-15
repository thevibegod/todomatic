/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import TASKS from "./taskData";
import App from "./App";
import { nanoid } from "nanoid";

describe("Testing basic rendering of App Component", () => {

    it("Displays Title", () => {
        const view = render(<App tasks={TASKS} />);
        expect(view.getByTestId("title")).toHaveTextContent("TodoMatic");
    });

    it("Has FilterButtons", () => {
        const view = render(<App tasks={TASKS} />);
        expect(view.getByTestId("filter-btn-grp")).toBeDefined();
    });

    it("Has Todo List Defined", () => {
        const view = render(<App tasks={TASKS} />);
        expect(view.getByTestId("todo-list")).toBeDefined();
    });


});

describe("Testing basic functionality of App Component", () => {

    it("By default creates three ToDo components and updates count heading", () => {
        const view = render(<App tasks={TASKS} />);
        expect(view.getByTestId("tasks-count")).toHaveTextContent("3 tasks remaining");
    });

    it("Testing zero todo case", () => {
        const view = render(<App />);
        expect(view.getByTestId("tasks-count")).toHaveTextContent("0 tasks remaining");
    });

    it("Testing one todo case", () => {
        const view = render(<App tasks={[{ id: nanoid(), text: "Hello World", completed: false }]} />);
        expect(view.getByTestId("tasks-count")).toHaveTextContent("1 task remaining");
    });

    it("Pass a todo and check it as completed.", () => {
        const taskId = nanoid();
        const view = render(<App tasks={[{ id: taskId, text: "Hello World", completed: false }]} />);
        view.getByTestId(`todo-checkbox-${taskId}`).click()
        expect(view.getByTestId(`todo-checkbox-${taskId}`)).toBeChecked();
    });

    it("Create a todo.", () => {
        const view = render(<App tasks={[]} />);
        const data = "Hello World";
        view.getByTestId(`form-textbox`).setAttribute("value", data);
        view.getByTestId('add-btn').click();
        expect(view.getByTestId("tasks-count")).toHaveTextContent("1 task remaining");
    });

    it("Delete a todo.", () => {
        const taskId = nanoid();
        const view = render(<App tasks={[{ id: taskId, text: "Hello World", completed: false }]} />);
        view.getByTestId(`todo-del-btn-${taskId}`).click();
        expect(view.getByTestId("tasks-count")).toHaveTextContent("0 tasks remaining");
    });

});