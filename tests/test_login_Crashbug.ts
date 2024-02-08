import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://n.rivals-staging.com/');
  await page.getByText('Log in').click();
  await page.getByTestId('login-form-username-or-email-input').click();
  await page.getByTestId('login-form-username-or-email-input').fill('crashbug');
  await page.getByTestId('login-form-password-input').click();
  await page.getByTestId('login-form-password-input').fill('Testing1!');
  await page.getByTestId('login-form-submit-button').click();
});