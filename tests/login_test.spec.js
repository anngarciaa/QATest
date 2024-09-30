import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    await page.goto('https://auth-sandbox.yourfreedomprojecthub.com/verify?domain=backoffice-sandbox.yourfreedomprojecthub.com&continue=aHR0cHM6Ly9zYW5kYm94LnlvdXJmcmVlZG9tcHJvamVjdGh1Yi5jb20vYXBpL2F1dGhlbnRpY2F0ZT9uZXh0PWFIUjBjSE02THk5ellXNWtZbTk0TG5sdmRYSm1jbVZsWkc5dGNISnZhbVZqZEdoMVlpNWpiMjB2&returnUrl=https://sandbox.yourfreedomprojecthub.com/');
    await page.pause();

    await page.locator('input[name="Auth[email]"').fill('group-devs@virtual-wonders.com');
    await page.locator('input[name="Auth[password]"').fill('demo');

    await page.waitForSelector('button[name="login-button"', {timeout: 5000});
    await page.locator('button[name="login-button"]').click();
});

