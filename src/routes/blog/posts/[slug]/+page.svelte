<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="main blur full">

	<p><a class="text1" style="font-size: 20px" href="/blog">← back to blog</a></p>
  <!-- Title -->
	<hgroup>
		<h1 class="text1" style="font-size: 30px;">{data.meta.title}</h1>
		<p class="text1" style="font-size: 20px;">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

  <!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4 text1" style="font-size: 20px;">&num;{category}</span>
		{/each}
	</div>

    <hr style="width: 100%;">

  <!-- Post -->
	<div class="prose text1" style="font-size: 20px;">
		<svelte:component this={data.content}/>
	</div>
</article>

<style>
	article {
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}


	.tags {
		display: flex;
		gap: 6px;

	}



    .blur{
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .full{
        width: 100%;
        height: 100%;
        padding: 30px;
        padding-top: 5px;
    }

    .main{
        margin: 100px;
        margin-top: 5px;
        background-color: rgba(80, 80, 80, 0.6);
        display:flex;
        flex-direction: column;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
    }
</style>
