<script>
	import { goto } from '$app/navigation';

	export let href;

	const handleClick = () => {
		goto(href);
	};
</script>

<a {href} on:click={handleClick}>
	<slot>Anchor</slot>
</a>

<style>
	a {
		text-decoration: none;
		color: var(--text);
		border-radius: var(--radius);
		display: inline-block;
		padding: 0.2rem;
		margin: 0.2rem;
		width: 15vh;
		text-align: center;
	}
	a:hover {
		background-color: var(--primary-lighter8);
	}
</style>
