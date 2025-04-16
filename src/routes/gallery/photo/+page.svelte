<script lang="ts">
    import * as config from '$lib/config'
    import { onMount } from 'svelte'

    interface respo {
        thumbnail: string
        name: string
    }

    let photos: respo[] = $state([])

    onMount(async () => {
        const phores = await fetch('/api/gallery/photo')

        photos = await phores.json();
    })
</script>

<svelte:head>
    <title>Photography - {config.title}</title>
    <meta name='description' content='This is where i showcase my art and my photographs. The gallery is divided into two for easier classification and viewing.'>
</svelte:head>


<div class="main full">
    <p class="text2"><a class="text2" href="/gallery">← Back to gallery</a></p>
    <span id="images">
        {#each photos as photo}
            <a class=hrefb
            href="/gallery/photo/{photo.name}"
            >
                <img
                src="{photo.thumbnail}"
                alt="{photo.name}"
                loading="lazy"
                />
            </a>
        {/each}
    </span>
</div>


<style>
    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
        height: fit-content;
    }

    .main{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        margin: 80px;
        margin-top: 5px;
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.4542836421678046) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
    }

    .full{
        width: 100%;
        height: fit-content;
        padding: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    
    * {
        box-sizing: border-box;
    }


    .hrefb {
        display: inline-block;
        transition: opacity 0.2s;
        width: 33%;
        aspect-ratio: 1/1;
        overflow: hidden;
    }

        a:hover {
        opacity: 0.95;
    }

    #images {
        width: 100%;
        display: table;
    }

    img {
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

    img:hover {
        transform: scale(200%);
    }

    @media (prefers-reduced-motion) {
        img {
            transition: unset;
            -webkit-transition: unset;
            -moz-transition: unset;
            -ms-transition: unset;
            -o-transition: unset;
        }

        img:hover {
            transform: scale(170%);
        }
    }


        /* X-Small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {

        }

        /* Small devices (landscape phones, less than 768px) */
        @media (max-width: 768px) {

            .main {
                margin: 0px;
                background: transparent;
            }

            .text2 {
                font-size: 15px;
            }

            .hrefb {
                width: 50%;
            }

            .full {
                padding: 15px;
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
