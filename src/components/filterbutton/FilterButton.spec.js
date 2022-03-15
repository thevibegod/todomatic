/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import React from "react";
import FilterButton from "./FilterButton";
describe("Testing basic rendering of FilterButton Component",()=>{

    it("Displays filter text",()=>
    {
        const value = "Active";
        const view = render(<FilterButton value={value}/>);
        expect(view.getByTestId("filter-text")).toHaveTextContent(value);
    });

    it("Is clickable and aria-pressable",()=>
    {
        const value = "Active";
        const view = render(<FilterButton value={value} ariaPressed={true}/>);
        expect(view.getByTestId("filter-btn")).toHaveAttribute("aria-pressed","true");
        expect(view.getByTestId("filter-btn")).not.toBeDisabled();
    });
});



