import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddToCartButton from "../src/components/AddToCartButton"; // Adjust the path as necessary
import { useCartContext } from "../src/hooks";
import { useTranslations } from "next-intl";
import { testProduct } from "@/constants";

// Mock the hooks
jest.mock("@/hooks", () => ({
  useCartContext: jest.fn(),
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

describe("AddToCartButton", () => {
  it("renders correctly and calls handleAddProduct on click", () => {
    const handleAddProduct = jest.fn();
    // Mock the return values of hooks
    (useCartContext as jest.Mock).mockReturnValue({ handleAddProduct });
    (useTranslations as jest.Mock).mockReturnValue((key: string) =>
      key === "add_to_cart" ? "Add to Cart" : key
    );

    // Render the component
    render(<AddToCartButton product={testProduct} />);

    // Check if the button renders with correct text
    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();

    // Simulate button click
    fireEvent.click(button);

    // Assert the handler was called with the correct argument
    expect(handleAddProduct).toHaveBeenCalledWith(testProduct);
    expect(handleAddProduct).toHaveBeenCalledTimes(1);
  });
});
