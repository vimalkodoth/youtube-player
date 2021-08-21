import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Player from "../components/pages/Player";

let store;
const mockStore = configureStore({});
const originalConsoleError = console.error;

describe("Player", () => {
    beforeEach(() => {
        console.error = jest.fn();
        store = mockStore({
            playerState: {}
        });
    });

    afterEach(() => {
        console.error = originalConsoleError;
        store = mockStore({});
    });

    it("renders correctly", () => {
        const component = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Player />
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
