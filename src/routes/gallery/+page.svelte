<script lang="ts">
    import { page } from '$app/stores';

    import * as config from '$lib/config'
    import { onMount } from 'svelte'

    interface respo {
        url: string
    }

    let art: respo[] = []
    let photo: respo[] = []

    let arturl: string = $state()
    let phourl: string = $state()

    onMount(async () => {
        const artres = await fetch('api/gallery/art')
        const phores = await fetch('api/gallery/photo')

        art = await artres.json();
        arturl = art[Math.floor(Math.random() * art.length)].url
        
        photo = await phores.json();
        phourl = photo[Math.floor(Math.random() * photo.length)].url
    })
</script>

<svelte:head>
    <title>Gallery - {config.title}</title>
    <meta name='description' content='Where i showcase my art and photography.'>

    <meta property="og:title" content="Gallery - {config.title}">
    <meta property="og:description" content="Where i showcase my art and photography.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="main full" id="main">
    <p class="text1" style="text-align: left;text-decoration:unset">🖼️Gallery</p>
    <p class="text2" style="text-align: left;">This is where i showcase my art and my photographs. The gallery is divided into two for easier classification and viewing. Theres also an archive for my older art inside the art gallery.</p>
    <div class="main2">
        <div class="gallery art" style="background-image: url('{ arturl }');">
            <a href="gallery/art" class="linking">
                <div class="darken">
                    <p class="text1 linking">Art</p>
                    <p class="text2 linking">Art I drew in my spare time</p>
                </div>
            </a>
        </div>
        <div class="gallery photo" style="background-image: url('{ phourl }');">
            <a href="gallery/photo" class="linking">
                <div class="darken">
                    <p class="text1 linking">Photography</p>
                    <p class="text2 linking">Photographs I took and color graded</p>
                </div>
            </a>
        </div>
    </div>
</main>

<style>
    .linking {
        color: #1CE9D4 !important;
    }

    .linking:visited {
        color: #2cc9ba;
    }

    .linking:hover {
        color: #37fce8;
        text-decoration: underline;
        text-decoration-color: #37fce8;
        text-decoration-thickness: 2px;
    }

    .main{
        display: flex;
        flex-direction: column;
        margin: 80px;
        margin-top: 5px;
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.4542836421678046) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
    }

    .main2{
        display: flex;
        flex-direction: row;
    }

    .full{
        width: 100%;
        height: fit-content;
        padding: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
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

    @media (prefers-reduced-motion) {
        .gallery {
            transition: unset;
            -webkit-transition: unset;
            -moz-transition: unset;
            -ms-transition: unset;
            -o-transition: unset;
        }

        .gallery:hover {
            background-size: 115%;
        }
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
        text-align: end;
        padding: 10px;
        text-decoration: underline;
        font-weight: 700;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
        text-align: end;
        padding: 10px;
    }


        /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {
        .main2 {
            margin: 10px !important;
        }

        .main {
            margin: 5px !important;
            margin-top: 10px !important;
            background: transparent;
        }

        .full {
            padding: 0px;
        }
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {
        .main2 {
            margin: 80px;
            margin-top: 10px;
            flex-direction: column;
        }

        .gallery{
            width: 100%;
            width: calc(100% - 20px);
            margin: 8px;
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