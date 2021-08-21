import React from "react";
import { render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Form from './../components/Form';

let store;
const mockStore = configureStore({});
const originalConsoleError = console.error;

describe("Form", () => {
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
                    <Form to={() => jest.fn()} />
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
