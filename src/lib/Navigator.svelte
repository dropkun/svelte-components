<div class="nav-outer">
	<div class="nav-inner">
		<slot>
			<a href="/">root</a>
		</slot>
	</div>
</div>

<style>
	.nav-inner {
		border-radius: var(--radius);
		margin: 0.5rem;
		background-color: var(--primary-lighter9);
		border: 3px solid var(--primary-dark2);
	}

	.nav-outer {
		display: flex;
		justify-content: center;
	}
</style>
