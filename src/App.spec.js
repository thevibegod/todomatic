/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("Testing basic rendering of App Component",()=>{

    it("Displays Title",()=>
    {
        const view = render(<App/>);
        expect(view.getByTestId("title")).toHaveTextContent("TodoMatic");
    });

    it("Has FilterButtons",()=>
    {
        const view = render(<App/>);
        expect(view.getByTestId("filter-btn-grp")).toBeDefined();
    });

    it("Has Todo List Defined",()=>
    {
        const view = render(<App/>);
        expect(view.getByTestId("todo-list")).toBeDefined();
    });

});



