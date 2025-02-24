<!-- @migration-task Error while migrating Svelte code: Expected a valid CSS identifier -->
<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
    import { page } from '$app/stores';
    import {onMount} from 'svelte'
    
    let toc: { text: string; level: number; id: string; hidelist: string }[] = [];
    let containerClass = 'sideright'; // Change this to your desired class

    onMount(() => {

        const container = document.querySelector(`.${containerClass}`);
        if (container) {
            const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
            toc = Array.from(headings).map(heading => {
                const level = parseInt(heading.tagName[1]);
                return {
                    text: (heading as HTMLElement).innerText,
                    level: level,
                    id: heading.id || (heading as HTMLElement).innerText.replace(/\s+/g, '-').toLowerCase(),
                    hidelist: level === 1 ? 'none' : ''
                }
            })
        }

    });
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title} - {config.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
    <meta name='description' content={data.meta.description}>

    <meta property="og:title" content="{data.meta.title} - {config.title}">
    <meta property="og:description" content="{data.meta.description}">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="article">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p><a class="text2" href="/blog" style="padding-left: 0; margin-left: 0">← Back to blog</a></p>
        <p class="title">{data.meta.title}</p>
        <p class="blogdesc">{data.meta.description}</p>
        <p class="blogdesc">Published {formatDate(data.meta.date)}</p>
        <div class="tags">
            <p class="blogdesc">
                {#each data.meta.categories as category}
                    &num;{category}&ensp;
                {/each}
            </p>
        </div>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
        
        <div class="sidebyside">
            <div class="sideleft">
                <p class="textm">Content</p>
                <ul>
                    {#each toc as { text, level, id, hidelist }}

                    <li style="margin-left: {level - 2.5}em; list-style-type: { hidelist };">

                        <a class="linking" href={`#${id}`}>{text}</a>

                    </li>

                    {/each}
                </ul>
            </div>
            <div class="sideright">
                <svelte:component this={data.content}/>
                <br>
                <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
                <!-- Utterances -->
                <script src="https://utteranc.es/client.js"
                    data-repo="Kraafter/Kraaftersite-v3"
                    data-issue-term="url"
                    data-label="uttered"
                    data-theme="github-dark"
                    data-crossorigin="anonymous"
                    async>
                </script>
            </div>
        </div>
    </div>
</main>

<style>

    li {
        padding: 0;
        color: #f0f8ff;
    }

    .title {
        font-size: 40px !important;
        font-weight: 1000;
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        padding: 10px;
    }

    .blogdesc {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    :global(.sideright tbody tr){
        border-bottom: 1px solid #f0f8ffaf;
    }

    :global(.sideright tbody tr:last-child){
        border-bottom: none;
    }

    :global(.sideright thead tr){
        border-bottom: 4px solid #f0f8ffaf;
    }

    :global(.sideright blockquote) {
        padding: 10px;
        border-radius: 5px;
        width: calc(100% - 20px);
        border-left: 15px solid #3d00a0;
        border-radius: 5px;
        margin-left: 20px;
        background-color: #323232;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    :global(.sideright table) {
        width: calc(100% - 40px);
        border-collapse: collapse;
        margin-left: 10px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    :global(.sideright td) {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    :global(.sideright th) {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    .sidebyside {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
    }

    .sideleft {
        width: 500px;
        height: fit-content;
        background: rgba(78, 78, 78, 0.6);
        border-radius: 5px;
        position: sticky;
        top: 10px;
    }

    .sideright {
        width: calc(100% - 25px);
        height: fit-content;
        margin-left: 15px;
    }

    .tophr {
        width: 100%;
    }

    .linking {
        background-color: #3d00a089;
        padding: 0 !important;
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
        margin: 80px;
        margin-top: 5px;
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50, 50, 50, 0.31) 1%, rgba(50,50,50,0.45) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
    }

    .main{
        display:flex;
        flex-direction: column;
    }

    :global(.sideright h1) {
        font-family: plus_jakarta_sansregular !important;
        color: aliceblue !important;
        font-size: 30px !important;
        padding: 10px !important;
        font-weight: 700 !important;
    }

    :global(.sideright h2) {
        font-family: plus_jakarta_sansregular !important;
        color: aliceblue !important;
        font-size: 25px !important;
        padding: 10px !important;
        margin-top: 50px !important;
        font-weight: 600 !important;
    }

    .textm {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 25px;
        padding: 10px;
        margin-bottom: 0;
    }

    :global(.sideright p) {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    :global(.sideright li) {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    a {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    :global(.shiki) {
        margin-left: 20px;
        height: 100%;
        padding: 20px;
        border-radius: 10px;
        border-style: ridge;
        border-color: #3d00a0;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    :global(.line) {
        font-family: ibm_plex_monoregular;
        font-size: 15px;
    }

    .texttoc{
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 0;
        margin-left: 10px;
    }

    .texthead {
        margin-top: 50px;
    }
    

    :global(.sideright .textcaption) {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 17px;
        padding: 10px;
        margin-bottom: 0;
        margin-top: 0;
        border-bottom: #f0f8ff 1px solid;
        width: calc(100% - 5px);
        padding: 0;
        padding-left: 3px;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    :global(.sideright img) {
        width: calc(100% - 5px);
        margin-top: 30px;
    }

    @media (max-width: 768px) {
        .texttoc {
            font-size: 15px;
        }

        :global(.sideright p) {
            font-size: 17px !important;
        }

        :global(.sideright li) {
            font-size: 17px !important;
        }
        :global(.sideright td) {
            font-size: 17px !important;
        }

        :global(code .line span) {
            font-size: 17px !important;
        }

        :global(.sideright li ol) {
            padding-left: 25px;
        }

        .full {
            padding: 0px;
            margin: 5px;
            background: transparent;
        }
    }

    @supports (-moz-appearance: none) {
        @media (max-width: 768px) {
            :global(.sideright h1) {
                width: 100% !important;
            }

            :global(.sideright h2) {
                width: 100% !important;
            }

            :global(.sideright p) {
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



        h1 {
            font-size: 25px;
            padding-bottom: 0px;
        }

        h2 {
            font-size: 20px;
            padding-top: 0px;
            margin-top: 20px;
        }

        .textm {
            font-size: 20px;
        }

        :global(.sideright p) {
            font-size: 15px;
            padding-top: 0px;
        }

        .textcaption {
            font-size: 15px;
        }

        .sidebyside {
            flex-direction: column;
        }

        .sideleft {
            width: 100%;
            margin-bottom: 30px;
        }

        .sideright {
            margin-left: 0;
            width: 100%;
        }

        .sideleft {
            position: unset;
        }
    }
</style>