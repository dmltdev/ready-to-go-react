import { test, expect } from "@playwright/test";

test("Counter increments when the button is clicked", async ({ page }) => {
  // Navigate to your React app's URL
  await page.goto("http://localhost:3000/");

  // Check if the initial count is 0
  await expect(page.locator("text=count is 0")).toBeVisible();

  // Click the button to increment the counter
  await page.click("text=count is 0");

  // Check if the count is now 1
  await expect(page.locator("text=count is 1")).toBeVisible();
});
