import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the Sign In page
  await page.goto('https://n.rivals-staging.com/users/sign_in');
  
  // Verify header elements
  await expect(page.getByTestId('rivals-logo-home-link')).toBeVisible();

  await expect(page.getByText('Join the team!')).toContainText('Join the team!');
  await expect(page.locator('[id="__next"]')).toContainText('Subscribe');
  await expect(page.locator('[id="__next"]')).toContainText('Gift A Subscription!');
  await expect(page.getByRole('link', { name: 'Gift A Subscription!' })).toBeVisible();
  await expect(page.getByTestId('toggle-prospect-search-overlay-button')).toBeVisible();
  await expect(page.locator('[id="__next"]')).toContainText('Log In');

  // Verify Log In box and slements
  await expect(page.getByTestId('login-form')).toBeVisible();
  await expect(page.getByTestId('login-form-header')).toContainText('Log in');
  await expect(page.getByTestId('login-form-username-or-email-label')).toContainText('Username or Email');
  await expect(page.getByTestId('login-form-username-or-email-input')).toBeVisible();
  await expect(page.getByTestId('login-form-password-label')).toContainText('Password');
  await expect(page.getByTestId('login-form-password-input')).toBeVisible();
  await expect(page.getByTestId('login-form-password-show-hide')).toContainText('Show');
  await page.getByTestId('login-form-password-show-hide').click();
  await expect(page.getByTestId('login-form-password-show-hide')).toContainText('Hide');
  await page.getByTestId('login-form-password-show-hide').click();
  await expect(page.getByTestId('login-form-password-show-hide')).toContainText('Show');
  await expect(page.getByTestId('login-form-submit-button')).toContainText('Log In');
  await expect(page.getByTestId('login-form-forgot-username-link')).toContainText('Forgot your username?');
  await expect(page.getByTestId('login-form-forgot-password-link')).toContainText('Forgot your password?');

  // Verify Subscribe box text and elements
  await expect(page.getByText('Subscribe today for $8.33/Monthcheck markMembers-only forumscheck markPredict')).toBeVisible();
  await expect(page.getByTestId('subscribe-today-header')).toContainText('Subscribe today for $8.33/Month');
  await expect(page.getByTestId('subscribe-today-checkmark-1').getByRole('img', { name: 'check mark' })).toBeVisible();
  await expect(page.getByTestId('subscribe-today-benefit-1')).toContainText('Members-only forums');
  await expect(page.getByTestId('subscribe-today-checkmark-2').locator('polygon')).toBeVisible();
  await expect(page.getByTestId('subscribe-today-benefit-2')).toContainText('Predict prospect commits with FanFutureCast');
  await expect(page.getByTestId('subscribe-today-checkmark-3').getByRole('img', { name: 'check mark' })).toBeVisible();
  await expect(page.getByTestId('subscribe-today-benefit-3')).toContainText('Exclusive highlights and interviews');
  await expect(page.getByTestId('subscribe-today-checkmark-4').getByRole('img', { name: 'check mark' })).toBeVisible();
  await expect(page.getByTestId('subscribe-today-benefit-4')).toContainText('Exclusive coverage of Rivals Camp Series');
  await expect(page.getByTestId('subscribe-today-checkmark-5').getByRole('img', { name: 'check mark' })).toBeVisible();
  await expect(page.getByTestId('subscribe-today-benefit-5')).toContainText('Breaking recruiting news');
  await expect(page.getByTestId('subscribe-today-button')).toContainText('Subscribe');
  await expect(page.getByTestId('subscribe-today-join-millions')).toContainText('Join millions of other fans!');

  // Verify Footer - React page
  await expect(page.getByRole('contentinfo')).toContainText('About');
  await expect(page.getByRole('contentinfo')).toContainText('Help');
  await expect(page.getByRole('contentinfo')).toContainText('Contact Us');
  await expect(page.getByRole('contentinfo')).toContainText('Terms of Service');
  await expect(page.getByRole('contentinfo')).toContainText('Gift Subscription');
  await expect(page.getByRole('contentinfo')).toContainText('Privacy Dashboard');
  await expect(page.getByRole('contentinfo')).toContainText('Privacy Policy');
  await expect(page.getByRole('contentinfo').locator('div').nth(2)).toBeVisible();
  await expect(page.getByTestId('react-data-footer')).toContainText('Certain Data by Sportradar');
  await expect(page.getByTestId('react-copyright-footer')).toContainText('© 2024 Yahoo. All rights reserved.');
});