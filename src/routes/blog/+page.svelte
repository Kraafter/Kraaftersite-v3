<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section class="main blur full">
	<ul class="posts" style="list-style-type: none; padding-left:0">
		{#each data.posts as post}
			<li class="post">
				<a href=/blog/posts/{post.slug} class="title text1" style="font-size: 30px;">{post.title}</a>
				<p class="date text1" style="font-size: 20px;">{formatDate(post.date)}</p>
				<p class="description text1" style="font-size: 20px;">{post.description}</p>
			</li>
            <hr>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 0;
	}

    .posts hr {
        visibility: hidden;
        width: 100%;
    }

	.posts hr:not(:last-child) {
        visibility: unset;
	}

	.title {
		text-transform: capitalize;
	}



    .blur{
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .full{
        width: 100%;
        min-height: 600px;
        height: fit-content;
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
