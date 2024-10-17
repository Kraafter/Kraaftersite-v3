<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} - {config.title}</title>
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

	<!-- Utterances -->
	<script src="https://utteranc.es/client.js"
		repo="Kraafter/Kraaftersite-v3"
		issue-term="url"
		label="uttered"
		theme="github-dark"
		crossorigin="anonymous"
		async>
	</script>
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

	.prose p a, a:link, a:visited, a:focus, a:hover, a:active {
		color: aliceblue !important;
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
        margin: 300px;
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
