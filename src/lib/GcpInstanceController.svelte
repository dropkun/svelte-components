<script lang="ts">
	import Circle3 from './spinner/Circle3.svelte';
	import { CirclePlayRegular, CircleStopRegular } from 'svelte-awesome-icons';
	import './global.css';
	import './color.ts';
	import { primary } from './color';
	export let status: string = 'PENDING';
	export let size: number = 60;
	export let startInstance: () => void;
	export let stopInstance: () => void;
	export let getInstanceStatus: () => Promise<string>;

	const RUN = 'RUNNING';
	const TERMINATE = 'TERMINATED';

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	getFirstStatus();

	async function getFirstStatus() {
		status = await getInstanceStatus();
	}

	async function start() {
		startInstance();
		await sleep(3000);
		await waitForStatus(RUN);
	}

	async function stop() {
		stopInstance();
		await sleep(3000);
		await waitForStatus(TERMINATE);
	}

	async function waitForStatus(targetStatus: string) {
		while (true) {
			status = await getInstanceStatus();
			if (status === targetStatus) {
				break;
			}
			await new Promise((resolve) => setTimeout(resolve, 3000));
		}
	}
</script>

<div class="controll_button">
	{#if status === TERMINATE}
		<button on:click={start}>
			<CirclePlayRegular {size} color={primary} />
		</button>
	{:else if status === RUN}
		<button on:click={stop}>
			<CircleStopRegular {size} color={primary} />
		</button>
	{:else}
		<Circle3 {size} />
	{/if}
</div>

<style>
	.controll_button {
		border: none;
		background: none;
		margin: 1em;
	}
</style>
