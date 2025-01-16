import { formatDate } from "../src/lib/utils";

describe("formatDate", () => {
  it("should format a date correctly", () => {
    const inputDate = new Date("2025-01-16");
    const formattedDate = formatDate(inputDate);

    // Check if the formatted date matches the expected result
    expect(formattedDate).toBe("Jan 16, 2025"); // Update based on your locale settings
  });
});
