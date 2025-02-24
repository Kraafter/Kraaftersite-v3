<script lang="ts">
    import * as config from '$lib/config'
    import { page } from '$app/stores';

    import { onMount } from 'svelte'

    interface respo {
        url: string
        tags: [string]
    }

    let art: respo[] = []

    let nordurl: string = $state()
    let glivurl: string = $state()

    let nordimg
    let glivimg

    onMount(async () => {
        const artres = await fetch('/api/gallery/art')

        art = await artres.json();

        nordimg = art
        .filter(file => file.tags.includes('nord'))
        .map(file => file.url)

        glivimg = art
        .filter(file => file.tags.includes('glive'))
        .map(file => file.url)
        
        nordurl = nordimg[Math.floor(Math.random() * nordimg.length)]
        glivurl = glivimg[Math.floor(Math.random() * glivimg.length)]
    })
</script>

<svelte:head>
    <title>Fursona - {config.title}</title>
    <meta name='description' content="Kraaft's fursonas.">

    <meta property="og:title" content="About - {config.title}">
    <meta property="og:description" content="Kraaft's fursonas.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <p class="text1">🐾 Fursona</p>
        <p class="text2">The two fursonas I go by in the fandom</p>
        <div class="main2">
            <div class="gallery art" style="background-image: url('{ glivurl }');">
                <a href="/about/fursona/glive">
                    <div class="darken">
                        <p class="text1">Glive</p>
                        <p class="text2">the protogen</p>
                    </div>
                </a>
            </div>
            <div class="gallery photo" style="background-image: url('{ nordurl }');">
                <a href="/about/fursona/nord">
                    <div class="darken">
                        <p class="text1">Nord</p>
                        <p class="text2">the amphimorpho</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</main>

<style>
    
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

    .main2{
        display:flex;
        flex-direction: row;
        width: 100%;
    }

    .gallery {
        width: calc(50% - 20px);
        aspect-ratio: 1/0.7;
        margin: 10px;
        margin-left: auto ;
        margin-right: auto;
        background-color: rgba(50,50,50,1);
        transition: all 0.6s ease-in-out;
        -webkit-transition: all 0.6s ease-in-out;
        -moz-transition: all 0.6s ease-in-out;
        -ms-transition: all 0.6s ease-in-out;
        -o-transition: all 0.6s ease-in-out;
        background-size: 115%;
        background-position: 50% 50% ;
    }

    .gallery:hover {
        background-size: 150%;
    }

    .darken {
        background-color: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
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

    @media (max-width: 768px) {
        
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {

        .gallery{
            width: 100%;
            width: calc(100% - 20px);
            margin: 8px;
        }

        .main2 {
            margin: 0px 5px;
            margin-top: 10px;
            flex-direction: column;
        }

        .full {
            padding: 0px;
            margin: 5px;
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