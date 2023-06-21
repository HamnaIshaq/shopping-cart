import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import ProductList from "../ProductList";

jest.mock("../product", () => ({ productImg, productTitle, productId }) => (
  <>
    <img
      data-testid="product"
      className="img"
      src={productImg}
      alt={productTitle}
    />
    <button
      data-testid="add-to-cart-btn"
      type="button"
      data-productId={productId}
    >
      Add to Cart
    </button>
  </>
));

// setup props
const data = [
  { id: 1, title: "Pink flowers", img: "pink-flowers.jpg" },
  { id: 2, title: "Red flowers", img: "red-flowers.jpg" },
  { id: 3, title: "Blue flowers", img: "blue-flowers.jpg" },
];

describe("product list", () => {
  describe("products", () => {
    it("render the products data array", () => {
      render(<ProductList data={data} />);

      expect(screen.queryAllByTestId("product").length).toBe(3);
      expect(screen.queryAllByTestId("product")[0].alt).toBe("Pink flowers");
      expect(screen.queryAllByTestId("product")[0].src).toContain(
        "pink-flowers.jpg"
      );
      expect(screen.queryAllByTestId("product")[1].alt).toBe("Red flowers");
      expect(screen.queryAllByTestId("product")[1].src).toContain(
        "red-flowers.jpg"
      );
      expect(screen.queryAllByTestId("product")[2].alt).toBe("Blue flowers");
      expect(screen.queryAllByTestId("product")[2].src).toContain(
        "blue-flowers.jpg"
      );
    });

    it("does not render any products when products array is empty, and instead renders no products message", () => {
      render(<ProductList data={[]} />);

      expect(screen.queryAllByTestId("product").length).toBe(0);
      expect(screen.getByText("No products present!")).toBeInTheDocument();
    });

    /*it("add product in cart state when button 'add to cart' is pressed 1 time", async () => {
      //const user = userEvent.setup();

      render(<ProductList data={data} />);

      const button = screen.queryAllByTestId("add-to-cart-btn")[0];
      //const buttonProductId = parseInt(button.getAttribute("data-productid"));
      //expect(buttonProductId).toBe(1);
      //expect(userEvent.click(button))//onClickAddToCartBtn(data[0].id, data[0].img, data[0].title))
      userEvent.click(button);

      //expect(handleClickAddToCart).toBeCalledTimes(1);

      // check if the on the scrren, the cart has 1 item displayed as a text in absolute positioning
      screen.getByText(1).toBeInTheDocument();
    });*/
  });
});
