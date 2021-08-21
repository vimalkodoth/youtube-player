import React from "react";
import { shallow } from "enzyme";
import Gif from './../components/pages/Gif';

const originalConsoleError = console.error;

describe("Form", () => {
    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error = originalConsoleError;
    });

    it("renders correctly", () => {
        const component = shallow(
            <Gif to={() => jest.fn()} />
        );
        expect(component).toMatchSnapshot();
    });
});
