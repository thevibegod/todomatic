/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import React from "react";
import ToDo from "./ToDo";

describe("Testing basic rendering of ToDo Component",()=>{

    it("Can display todo text",()=>
    {
        const hello = "Hello";
        const view = render(<ToDo text={hello}/>);
        expect(view.getByTestId("todo-text")).toHaveTextContent(hello);
    });

    it("Can render checkbox with checked attribute",()=>{
        const {getByTestId} = render(<ToDo checked={true}/>);
        expect(getByTestId("checkbox")).toBeChecked();
    });

    it("Can render edit and delete clickable buttons",()=>{
        const {getByTestId} = render(<ToDo/>);
        expect(getByTestId("edit-btn")).not.toHaveAttribute("disabled");
        expect(getByTestId("del-btn")).not.toHaveAttribute("disabled");
    });

});



