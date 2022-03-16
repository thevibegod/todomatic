/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import React from "react";
import ToDo from "./ToDo";

describe("Testing basic rendering of ToDo Component", () => {

    it("Can display todo text", () => {
        const hello = "Hello";
        const view = render(<ToDo text={hello} id="1" />);
        expect(view.getByTestId(`todo-text-${1}`)).toHaveTextContent(hello);
    });

    it("Can render checkbox with checked attribute", () => {
        const { getByTestId } = render(<ToDo id="1" completed={true} />);
        expect(getByTestId("todo-checkbox-1")).toBeChecked();
    });

    it("Can render edit and delete clickable buttons", () => {
        const { getByTestId } = render(<ToDo id="1" />);
        expect(getByTestId("todo-edit-btn-1")).not.toHaveAttribute("disabled");
        expect(getByTestId("todo-del-btn-1")).not.toHaveAttribute("disabled");
    });

});



