<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<script lang="ts" module>
	import { img } from '$lib/components/custom'
	export { img }
</script>

{@render children?.()}
