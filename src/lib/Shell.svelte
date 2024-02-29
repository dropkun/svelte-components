<div class="header">
	<slot name="header-name">
		<h1>Header</h1>
	</slot>
</div>
<div class="content">
	<slot name="sidebar" />
	<div class="main">
		<slot name="content-header" />
		<slot />
	</div>
</div>

<style>
	h1 {
		margin: 0 0 0 1rem;
		color: var(--bg);
	}

	.header {
		background-color: var(--primary-dark2);
		height: 3rem;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
	}

	.content {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}

	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	:global(body) {
		background-color: var(--bg);
	}
</style>
