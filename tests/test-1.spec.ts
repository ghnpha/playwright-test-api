import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('Youtube');
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('nhac');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'Search' })).toHaveValue('nhac');
});