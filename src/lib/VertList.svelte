<script>
	export let items = ['test', 'test2', 'test3'];
	$: selected = 'test';
	import './global.css';

	function handleItemClick(item) {
		selected = item;
		// ここで選択中のアイテムに対する処理を追加することができます
	}
</script>

<div class="navigator">
	{#each items as item (item)}
		<div class="nav" class:selected={selected === item} on:click={() => handleItemClick(item)}>
			{item}
		</div>
	{/each}
</div>

<style>
	.nav {
		border-radius: var(--radius);
		padding: 0.5rem;
		margin: 0.5rem;
	}

	.selected {
		background-color: var(--primary-lighter3);
	}

	.nav:not(.selected):hover {
		background-color: var(--primary-lighter8);
	}

	.navigator {
		border-right: 1px solid var(--primary-lighter7);
		width: 25%;
		margin: 0;
		box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.1);
		background-color: var(--primary-lighter9);
	}
</style>
