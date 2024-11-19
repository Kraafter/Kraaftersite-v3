<script lang="ts">
	import * as config from '$lib/config'
    import { onMount } from 'svelte';

    interface repot {
        archived: boolean;
        html_url: string;
        full_name: string;
        description: string;
    }

    let repos: repot[];

    onMount(async () => {
        const res = await fetch('https://api.github.com/users/kraafter/repos');
        repos = await res.json();
    });
</script>

<svelte:head>
	<title>Projects - {config.title}</title>
</svelte:head>


<section class="main blur full">
    <p class="text1" style="padding-top: 10px;">📁Projects</p>
    <p class="text2 pagedesc">This part of the website is where I put projects, which either I own, or I take part in. Currently it lists directly from Github but one day I will put up some highlights.</p>
    <hr style="visibility:visible; width: 100%; border-top: 1px solid aliceblue">
	<ul class="posts" style="list-style-type: none; padding-left:0">
        {#if repos}
            {#each repos as repo}
                {#if repo.archived == false}
                    <li class="posts">
                        <a href="{repo.html_url}" class="text1 title" target="_blank"><span style="width: 100%;">{repo.full_name}</span></a>
                        {#if repo.description}
                            <span><p class="text2">{repo.description}</p></span>
                        {:else}
                            <p class="text2">This repository has no description</p>
                        {/if}
                    </li>
                    <hr>
                {/if}
            {/each}
        {:else}
            <p class="text1" style="font-size: 30px; width: 100%; text-align: center;">Loading...</p>
        {/if}
            
	</ul>

    <a href='/projects/archive'><p class='text1' style="font-size: 20px;">Archive →</p></a>
</section>

<style>

        li {
            width: auto;
        }

	.posts {
		display: grid;
		gap: 0;
	}

    .posts hr {
        visibility: hidden;
        width: 100%;
        border-top: 1px solid aliceblue !important;
        height: 1px !important;
    }

	.posts hr:not(:last-child) {
        visibility:visible;
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
        min-height: 300px;
        height: fit-content;
        padding: 30px;
        padding-top: 5px;
    }

    .main{
        margin: 100px;
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

    .pagedesc {
        margin: 30px 20px 0 0
    }


    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

/* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

        .main {
            margin: 10px;
            padding: 25px;
        }

        .text1 {
            font-size: 25px;
        }

        .text2 {
            font-size: 15px;
        }

        .pagedesc {
            margin: 0
        }
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {

    }

    /* Large devices (desktops, less than 1200px) */
    @media (max-width: 1199.98px) {

    }

    /* X-Large devices (large desktops, less than 1400px) */
    @media (max-width: 1399.98px) {

    }
</style>
