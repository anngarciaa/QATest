import { test, expect } from "@playwright/test";

test('QA Skill Test', async ({ page }) => {

    await page.goto("https://sandbox.yourfreedomprojecthub.com/");

    await expect(page.getByRole('button', {name: 'Sign in'})).toHaveCount(0);
    await page.getByText("Sign in").click();
    //await page.pause();

    await page.getByLabel("email").fill("group-devs@virtual-wonders.com", {delay:200});
    await page.getByLabel("password").fill("demo", {delay:100});
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/.*dashboard/);
   
    //await page.getByRole('button', { name: 'AT' }).click();
    //await page.locator('text="Log out"').click();

    //await expect(page).toHaveURL("https://sandbox.yourfreedomprojecthub.com/");
});
