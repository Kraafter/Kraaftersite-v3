<script lang="ts">
	import * as config from '$lib/config'
    import { onMount } from 'svelte';

    let repos;

    onMount(async () => {
        const res = await fetch('https://api.github.com/users/kraafter/repos');
        repos = await res.json();
    });
</script>

<svelte:head>
	<title>Projects - {config.title}</title>
</svelte:head>


<section class="main blur full">
	<ul class="posts" style="list-style-type: none; padding-left:0">
        {#if repos}
            {#each repos as repo}
                {#if repo.archived == true}
                    <li class="posts">
                        <a href="{repo.html_url}" class="text1 title" target="_blank">{repo.full_name}</a>
                        {#if repo.description}
                            <span><p class="text1" style="font-size: 20px;">{repo.description}</p></span>
                        {:else}
                            <p class="text1" style="font-size: 20px;">This repository has no description</p>
                        {/if}
                    </li>
                    <hr>
                {/if}
            {/each}
        {:else}
            <p class="text1" style="font-size: 30px; width: 100%; text-align: center;">Loading...</p>
        {/if}
            
	</ul>

    <a href='/projects'><p class='text1' style="font-size: 20px;">← Back</p></a>
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
        font-size: 30px;
	}



    .blur{
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .full{
        width: 100%;
        min-height: 300px;
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
