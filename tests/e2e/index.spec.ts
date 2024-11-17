import { expect, test } from "@playwright/test";

test("navigation works correctly", async ({ page }) => {
  await page.goto("/");

  // Utiliser des sélecteurs data-testid plus fiables
  await page.locator('[data-testid="nav-about"]').click();
  await expect(page).toHaveURL("/#about");

  await page.locator('[data-testid="nav-experience"]').click();
  await expect(page).toHaveURL("/#experience");

  await page.locator('[data-testid="nav-projects"]').click();
  await expect(page).toHaveURL("/#projects");
});

test("projects page navigation works", async ({ page }) => {
  await page.goto("/");
  await page.getByText("View Full Projects Archive").click();
  await expect(page).toHaveURL("/projets");
});

test("theme toggle works", async ({ page }) => {
  await page.goto("/");
  const themeButton = page.locator("button:has(svg)").first();
  await themeButton.click();

  // Vérifier l'attribut data-theme
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark", {
    timeout: 2000,
  });
});
