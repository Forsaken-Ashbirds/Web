import { expect, test } from '@playwright/test';

test('home page presents the modernized hero content', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('heading', {
			name: 'Gemeinsam fliegen. Gelassen spielen. Als Community wachsen.'
		})
	).toBeVisible();
	await expect(page.getByRole('link', { name: 'Community entdecken' })).toBeVisible();
});

test('community page presents actual community content', async ({ page }) => {
	await page.goto('/community');
	await expect(page.getByRole('heading', { name: 'Community' })).toBeVisible();
	await expect(page.getByText('Trading')).toBeVisible();
	await expect(page.getByText('Under construction')).toHaveCount(0);
});
