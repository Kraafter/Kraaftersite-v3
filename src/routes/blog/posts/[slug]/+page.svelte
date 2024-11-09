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

	<p><a class="text2" href="/blog">← back to blog</a></p>
  <!-- Title -->
	<hgroup>
		<h1 class="text1">{data.meta.title}</h1>
		<p class="text2">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

  <!-- Tags -->
	<div class="tags">
		<span class="surface-4 text2">
			{#each data.meta.categories as category}
				&num;{category}&ensp;
			{/each}
		</span>
	</div>

    <hr style="width: 100%;">

  <!-- Post -->
	<div class="prose text2">
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

	hr {
        width: 100% !important;
        border-top: 1px solid aliceblue !important;
        height: 1px !important;
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
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.4542836421678046) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
        display:flex;
        flex-direction: column;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
		font-size: 30px;
    }

	
    .text2 {
        font-family: monospace;
        color: aliceblue;
		font-size: 20px;
    }


	        /* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
        .main {
            margin: 30px !important;
        }

        .full {
            padding: 5px !important;
        }

        .text1 {
            font-size: 25px;
        }

        .text2 {
            font-size: 15px;
        }
    
	}

        /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

    }

        /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {
        .full {
            padding: 10px;
            padding-top: 5px;
        }

        .main {
            margin: 60px;
        }
    }

        /* Large devices (desktops, less than 1200px) */
    @media (max-width: 1199.98px) {
        .full {
            padding: 20px;
            padding-top: 5px;
        }

        .main {
            margin: 100px;
        }
    }

        /* X-Large devices (large desktops, less than 1400px) */
    @media (max-width: 1399.98px) {

    }
</style>
