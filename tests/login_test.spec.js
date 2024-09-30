import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('https://sandbox.yourfreedomprojecthub.com/');
    await expect(page).toHaveTitle('When you sell, you create resistance, when you educate, you build rapport and trust.');
    await page.pause();
    await page.locator('input[name="Auth[email]"').fill('group-devs@virtual-wonders.com');
    await page.locator('input[name="Auth[password]"').fill('demo');
});