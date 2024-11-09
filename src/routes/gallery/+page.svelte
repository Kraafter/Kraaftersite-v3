<script lang="ts">
    import * as config from '$lib/config'
    import { onMount } from 'svelte'

    interface respo {
        url: string
    }

    let art: respo[] = []
    let photo: respo[] = []

    let arturl: string
    let phourl: string

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
</svelte:head>

<div class="main full">
    <p class="text1" style="text-align: left;">Gallery</p>
    <p class="text2" style="text-align: left;">This is where i showcase my art and my photographs. The gallery is divided into two for easier classification and viewing. Theres also an archive for my older art inside the art gallery.</p>
    <div class="main2">
        <div class="gallery art" style="background-image: url('{ arturl }');">
            <a href="gallery/art">
                <div class="darken">
                    <p class="text1">Art</p>
                    <p class="text2">Art I drew in my spare time</p>
                </div>
            </a>
        </div>
        <div class="gallery photo" style="background-image: url('{ phourl }');">
            <a href="gallery/photo">
                <div class="darken">
                    <p class="text1">Photography</p>
                    <p class="text2">Photographs I took and color graded</p>
                </div>
            </a>
        </div>
    </div>
</div>

<style>
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

    .darken {
        background-color: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
        font-size: 30px;
        text-align: end;
        padding: 10px;
        text-decoration: underline;
    }

    .text2 {
        font-family: monospace;
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
            margin: 30px !important;
            margin-top: 10px !important;
        }
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {
        .main2 {
            margin: 80px;
            margin-top: 10px;
            flex-direction: column;
        }

        .full {
            padding: 10px;
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