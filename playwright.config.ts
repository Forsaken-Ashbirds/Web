import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'bun run build && bun run preview -- --host 127.0.0.1',
		url: 'http://127.0.0.1:4173'
	},
	use: {
		baseURL: 'http://127.0.0.1:4173'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
