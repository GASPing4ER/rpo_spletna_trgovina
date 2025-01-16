import { testProduct } from "@/constants";
import { getProduct, getProducts } from "../src/actions/products"; // Adjust the path accordingly

describe("Product Actions", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe("getProduct", () => {
    it("should return the correct product for a given product ID", async () => {
      const productId = "792f549c-58b7-42a8-a1c1-16ea7c3976fe"; // Product ID to test
      const result = await getProduct(productId);

      expect(result.data).toEqual(testProduct);
      expect(result.error).toBeNull();
      expect(result.message).toBe("Successful Fetch of Product Data");
    });
  });

  describe("getProducts", () => {
    it("should return 16 products", async () => {
      const result = await getProducts(); // Get all products without category filter
      expect(result.data).toHaveLength(16); // Assert length of data is 16
      expect(result.error).toBeNull();
      expect(result.message).toBe("Successful Fetch of Products Data");
    });
  });
});
