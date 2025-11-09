import { readable, type Readable } from 'svelte/store';

/**
 * Provides reactive access to the current time.
 */
export class ClockService {
	private readonly intervalMs: number;

	public constructor(intervalMs = 1000) {
		this.intervalMs = intervalMs;
	}

	/**
	 * Creates a readable store that emits the current time in the configured interval.
	 */
	public createClock(): Readable<Date> {
		return readable(new Date(), (set) => {
			const intervalId = setInterval(() => set(new Date()), this.intervalMs);
			return () => clearInterval(intervalId);
		});
	}
}

/**
 * Formats a given date instance to a HH:MM:SS string.
 */
export const formatTime = (value: Date): string => {
	const pad = (segment: number) => segment.toString().padStart(2, '0');
	return `${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`;
};
