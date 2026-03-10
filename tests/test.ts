import { expect, test } from '@playwright/test';

test('home page presents the modernized hero content', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('home-hero')).toBeVisible();
	await expect(page.getByTestId('home-hero-title')).toBeVisible();
	await expect(page.getByRole('link', { name: 'Community entdecken' })).toBeVisible();
});

test('community page presents actual community content', async ({ page }) => {
	await page.goto('/community');
	await expect(page.getByTestId('community-page-title')).toBeVisible();
	await expect(page.getByTestId('community-highlights')).toBeVisible();
	await expect(
		page.getByTestId('community-highlights').getByRole('heading', { name: 'Trading' })
	).toBeVisible();
	await expect(page.getByText('Under construction')).toHaveCount(0);
});
