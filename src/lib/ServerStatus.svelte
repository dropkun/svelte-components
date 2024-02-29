<script lang="ts">
	export let status: string = 'RUNNING';
	export let size: number = 30;
	import { CircleCheckRegular, CirclePauseRegular } from 'svelte-awesome-icons';
	import Circle3 from './spinner/Circle3.svelte';
	import './global.css';
</script>

<div class="server-status">
	{#if status === 'RUNNING'}
		<CircleCheckRegular {size} color="Green" />
	{:else if status === 'TERMINATED'}
		<CirclePauseRegular {size} color="Red" />
	{:else}
		<Circle3 {size} />
	{/if}
	<p>{status}</p>
</div>

<style>
	p {
		margin: 0 0.5rem;
	}
	.server-status {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.8rem;
		border: 0.3rem solid;
		border-color: var(--primary-dark1);
		width: 10rem;
		border-radius: 1.5rem;
	}
</style>
