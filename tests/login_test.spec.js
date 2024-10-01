import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('https://sandbox.yourfreedomprojecthub.com/');
    await page.getByText('Sign In').click();

    await page.getByLabel('email').fill('group-devs@virtual-wonders.com', {delay:200});
    await page.getByLabel('password').fill('demo', {delay:100});

    await page.locator("//button[@type='submit']").click();

    // await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/dashboard/);

    await page.getByText("AT").first().click();
    await page.getByText("Logout").click();

    // await page.waitForTimeout(3000);

    await expect(page).toHaveURL('https://sandbox.yourfreedomprojecthub.com/');
});

