<script>
	import ServerStatus from '$lib/ServerStatus.svelte';
	import GcpInstanceController from '$lib/GcpInstanceController.svelte';
</script>

<div class="control">
	<ServerStatus status="RUNNING" />
	<GcpInstanceController />
</div>

<style>
	.control {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
