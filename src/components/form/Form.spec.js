/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import React from "react";
import Form from "./Form";

describe("Testing basic rendering of Form Component", () => {

    it("Has a textbox", () => {
        const view = render(<Form />);
        expect(view.getByTestId("form-textbox")).toBeDefined();
        expect(view.getByTestId("form-textbox")).toBeVisible();
    });

    it("Has an Add button", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("add-btn")).not.toBeDisabled();
    });

});



