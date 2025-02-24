<script>
	import { page } from '$app/stores'
</script>

<svelte:head>
    <title>Houston, we got a problem</title>
    <meta name='description' content='Um, oof'>
</svelte:head>

<div class="error">
	<h1 class="text1" style="font-size: 40px;">{$page.status}: {$page.error?.message}</h1>
    <span>
        <a href='/'><p class='text1'>Go Home</p></a>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href='javascript:history.back()'><p class='text1'>Last page</p></a>
    </span>
</div>

<style>
	.error {
		height: 100%;
        width: fit-content;
		display: flex;
        flex-direction: column;
        margin: 0 auto auto;
	}

    .text1 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        width: 100%;
        text-align: center;
    }

    span {
        width: fit-content;
        margin: 0 auto auto;
    }
</style>