<script>
	import { session } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('onMount');
	});
</script>

<div>{$session.counter}</div>

<button
	type="button"
	on:click={() => {
		session.update((session) => {
			return {
				counter: session.counter + 1
			};
		});
	}}>Click me</button
>
