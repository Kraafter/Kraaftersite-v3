<script lang="ts">
	import * as config from '$lib/config'
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    interface repot {
        archived: boolean;
        html_url: string;
        full_name: string;
        description: string;
    }

    let repos: repot[] = $state();

    onMount(async () => {
        const res = await fetch('https://api.github.com/users/kraafter/repos');
        repos = await res.json();
    });
</script>

<svelte:head>
	<title>Projects - {config.title}</title>
    <meta name='description' content='Archived projects from GitHub.'>

    <meta property="og:title" content="Project Archive - {config.title}">
    <meta property="og:description" content="Archived projects from GitHub">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>


<section class="main blur full">
    <p><a class="text2 linking" href="/projects">← back to projects</a></p>
    <p class="text1" style="padding-top: 10px;">📁Archive</p>
    <p class="text2 pagedesc">This part of the website is where I put no longer maintained projects or GitHub Repositories.</p>
    <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
	<ul class="posts" style="list-style-type: none; padding-left:0">
        {#if repos}
            {#each repos as repo}
                {#if repo.archived == true}
                    <li class="posts">
                        <a href="{repo.html_url}" class="text1 title linking" target="_blank">{repo.full_name}</a>
                        {#if repo.description}
                            <p class="text2 textlist">{repo.description}</p>
                        {:else}
                            <p class="text2 textlist">This repository has no description</p>
                        {/if}
                    </li>
                    <hr>
                {/if}
            {/each}
        {:else}
            <p class="text1" style="font-size: 30px; width: 100%; text-align: center;">Loading...</p>
        {/if}
            
	</ul>
</section>

<style>

.linking {
        color: #1CE9D4 !important;
        text-decoration: underline;
        padding: 0 !important
    }

    .linking:visited {
        color: #2cc9ba;
    }

    .linking:hover {
        color: #37fce8;
        text-decoration-color: #ffffff;
        text-decoration-thickness: 2px;
    }

    li {
        width: auto;
    }

	.posts {
		display: grid;
		gap: 0;
        width: 100%;
	}

    .posts hr {
        visibility: hidden;
        width: 100%;
        border-top: 1px solid aliceblue !important;
        height: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

	.posts hr:not(:last-child) {
        visibility:visible;
        height: 1px !important;
        margin-top: 1rem !important;
        margin-bottom: 1rem  !important;
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
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        text-wrap: wrap;
        word-wrap: break-word;
        width: 100%;
        height: fit-content;
        font-weight: 700;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
        text-wrap: wrap;
        word-wrap: break-word;
        width: 100%;
        height: fit-content;
    }

    .pagedesc {
        margin: 30px 20px 0 0
    }

    .tophr {
        width: 100%;
    }

    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

/* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

        .main {
            margin: 0px;
            padding: 15px;
            background: transparent;
        }

        .text1 {
            font-size: 25px;
            width: calc(100% - 25px);
        }

        .text2 {
            font-size: 15px;
        }

        .textlist {
            width: calc(100% - 25px);
        }

        .posts hr {
            width: calc(100% - 25px);
            margin-left: 0;
            margin-right: 0;
        }

        .pagedesc {
            margin: 0
        }

        .full {
            width: 100%;
        }
    }

    @supports (-moz-appearance: none) {
        @media (max-width: 768px) {
            .text1 {
                width: 100% !important;
            }

            .text2 {
                width: 100% !important;
            }

            .textlist {
                width: 100% !important;
            }

            .posts hr {
                width: 100%;
            }
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
