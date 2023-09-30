import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import Main from "./Main";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe("Form Component", () => {
  test("renders product name input and updates value correctly", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const productNameInput = screen.getByLabelText("Product Name");

    fireEvent.change(productNameInput, { target: { value: "Test Product" } });
    expect(productNameInput).toHaveValue("Test Product");
  });

  test("validates product name with invalid characters", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const productNameInput = screen.getByLabelText("Product Name");

    fireEvent.change(productNameInput, { target: { value: "@#Product" } });
    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

    const productNameError = await screen.findByText(
      /Name must not contain symbols/i
    );

    expect(productNameError).toBeInTheDocument();
  });

  test("validates product name length (25 Characters)", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const productNameInput = screen.getByLabelText("Product Name");

    fireEvent.change(productNameInput, {
      target: { value: 'VeryLongProductNameThatIsMoreThanTwentyFiveCharacters' },
    });

    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

    const productNameLengthError = await screen.findByText(
      /Product Name must be at most 25 characters/i
    );

    expect(productNameLengthError).toBeInTheDocument();
  });
  
  test("validates all form fields are not empty", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  
    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
  
    const emptyFieldsError = await screen.findByText(
      /Please fill in all fields before adding products/i
    );
    expect(emptyFieldsError).toBeInTheDocument();
  });

  test("Selected product category value correctly", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const productCategoryDropdown = screen.getByLabelText("Product Category");

    fireEvent.change(productCategoryDropdown, { target: { value: "clothing" } });

    expect(productCategoryDropdown).toHaveValue("clothing");
  });  
});
