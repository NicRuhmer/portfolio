import { expect, test } from "@playwright/test";

test.describe("Portfolio E2E Tests", () => {
  test("navigation works correctly", async ({ page }) => {
    await page.goto("/");

    // Test navigation
    await page.click("text=About");
    await expect(page).toHaveURL(/#about/);

    await page.click("text=Experience");
    await expect(page).toHaveURL(/#experience/);

    await page.click("text=Projects");
    await expect(page).toHaveURL(/#projects/);
  });

  test("projects page navigation works", async ({ page }) => {
    await page.goto("/");
    await page.click("text=View Full Projects Archive");
    await expect(page).toHaveURL(/\/projets/);
  });

  test("theme toggle works", async ({ page }) => {
    await page.goto("/");
    const themeButton = await page.locator("button:has(svg)").first();
    await themeButton.click();
    await expect(page.locator("body")).toHaveClass(/dark/);
  });
});
