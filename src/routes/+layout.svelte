<script>
	import VertList from '$lib/VertList.svelte';
	import Navigator from '$lib/Navigator.svelte';
	import Anchor from '$lib/Anchor.svelte';
	import Shell from '$lib/Shell.svelte';

	let instances = [
		{
			name: 'instance1',
			instance: 'instance1',
			project: 'project1',
			zone: 'zone1'
		},
		{
			name: 'instance2',
			instance: 'instance2',
			project: 'project2',
			zone: 'zone2'
		},
		{
			name: 'instance3',
			instance: 'instance3',
			project: 'project3',
			zone: 'zone3'
		}
	];

	let names = instances.map((i) => i.name);
	let test = ['testw', 'twest2', 'twest3'];
</script>

<Shell>
	<svelte:fragment slot="header-name">
		<h2>Server controller</h2>
	</svelte:fragment>
	<svelte:fragment slot="sidebar">
		<VertList {names} />
	</svelte:fragment>
	<svelte:fragment slot="content-header">
		<Navigator>
			<Anchor href="/control">Control</Anchor>
			<Anchor href="/monitor">Monitor</Anchor>
			<Anchor href="/log">Log</Anchor>
		</Navigator>
		<slot />
	</svelte:fragment>
</Shell>

<style>
	h2 {
		margin: 0 0 0 1rem;
		color: var(--bg);
	}
	:global(body) {
		background-color: var(--bg);
	}
</style>
