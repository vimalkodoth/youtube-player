import React from "react";
import { render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Home from "./../components/pages/Home";

let store;
const mockStore = configureStore({});
const originalConsoleError = console.error;

describe("Home", () => {
    beforeEach(() => {
        console.error = jest.fn();
        store = mockStore({});
    });

    afterEach(() => {
        console.error = originalConsoleError;
        store = mockStore({});
    });

    it("renders correctly", () => {
        const component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
