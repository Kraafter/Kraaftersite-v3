<script lang="ts">
    import * as config from '$lib/config'
    import { page } from '$app/stores';

    import { onMount } from 'svelte'

    interface respo {
        url: string
        tags: [string]
        name: string
        thumbnail: string
    }

    let art: respo[] = []

    let glivimg: respo[] = $state([])

    onMount(async () => {
        const artres = await fetch('/api/gallery/art')

        art = await artres.json();

        glivimg = art
        .filter(file => file.tags.includes('glive'))
    })
</script>

<svelte:head>
    <title>Glive - {config.title}</title>
    <meta name='description' content='Information about Glive the protogen.'>

    <meta property="og:title" content="Glive - {config.title}">
    <meta property="og:description" content="Information about Glive the protogen.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main id="main" class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about/fursona">← Back to fursonas</a></p>
        <p class="text1">💻 Glive</p>
        <div class="mainimg">
            <img class="gliveimg" alt="Glive the protogen greeting visitors with a beep!" src="/assets/media/site/glivebeep.webp">
        </div>
        <p class="text2">The first fursona I made, Glive is a common protogen featuring usual protogen features. What kind of sets
            him apart is his visor graphics, being all colorful (it's actually a pretty random pattern I made years ago). His design
            is pretty simple, not having an additional set of ears like some other protogens. He doesn't have any lore whatsoever except
            for how his visors show so much colors (A defect caused from a craft impact, causing him to crash into earth).
        </p>
        <ul>
            <li class="text2">Species: Protogen (<a class="text2 linking" href="https://zoruniverse.info/" target="_blank">info</a>)</li>
            <li class="text2">Gender: Male</li>
            <li class="text2">Pronouns: He/Him</li>
            <li class="text2">First appearance: 5th Feb 2022 (<a class="text2 linking" href="/gallery/archive/FMne5aAaMAAetBr.png">art</a>)</li>
        </ul>
        <p class="text2">Random Fact: He does not have a refsheet as of now</p>
        <div class="imgcontain">
            <span id="images">
            {#each glivimg as photo}
                <a class=hrefb
                href="/gallery/art/{photo.name}"
                >
                    <img
                    src="{photo.thumbnail}"
                    alt="{photo.name}"
                    loading="lazy"
                    />
                </a>
            {/each}
        </span></div>
        
    </div>
</main>

<style>
    img:not(.gliveimg) {
        width: 100%;
        vertical-align: bottom;
        object-fit: contain;
        margin: 3px;
        transform: scale(170%);
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
    }

    img:not(.gliveimg):hover {
        transform: scale(200%);
    }
    
    * {
        box-sizing: border-box;
    }

    .imgcontain {
        width: 100%;
        display: inline-block;
    }

    .hrefb {
        display: inline-block;
        transition: opacity 0.2s;
        width: 33%;
        aspect-ratio: 1/1;
        overflow: hidden;
        margin: 2px 2px 2px 2px;
    }

    #images {
        width: 100%;
        display: table;
        margin: 0;
        
    }

    .mainimg {
        width: 40%;
        height: auto;
        padding-top: auto;
        padding-bottom: auto;
    }

    .gliveimg {
        width: 100%;
        height: 100%;
        margin: auto !important;
        display: block;
        object-fit: contain;
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
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.45) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
    }

    .main{
        display:flex;
        flex-direction: column;
    }

    .text1 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
        font-weight: 700;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    .linking {
        background-color: rgba(61, 0, 160, 0.537);
        padding: 0 !important;
    }

    @media (max-width: 768px) {
        .hrefb {
            width: 50%;
            margin: 0;
        }
        
        .full {
            padding: 0px;
            margin: 5px;
            background: transparent;
        }

        .gliveimg {
            width: unset;
            height: 250px;
        }
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {

        .full {
            padding: 0px;
            margin: 15px;
            background: transparent;
        }

        .text1 {
            font-size: 25px;
            padding-bottom: 0px;
        }

        .text2 {
            font-size: 15px;
            padding-top: 0px;
        }
    }
</style>