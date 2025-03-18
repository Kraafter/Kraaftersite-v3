<script>
    import * as config from '$lib/config'
    import { page } from '$app/stores';

    import { Viewer } from "svelte-image-viewer";

    /** @type {{data: any}} */
    let { data } = $props();
    let name = data.slug
    let url = "https://ik.imagekit.io/kr4ft/photo/" + name
    
    let viewerOffsetXTarget = $state(0)
    let viewerOffsetYTarget = $state(0)
    let viewerScaleTarget = $state(0.8)

    function resetViewer() {
        viewerOffsetXTarget = 0;
        viewerOffsetYTarget = 0;
        viewerScaleTarget = 0.8;
    }
</script>

<svelte:head>
    <title>{data.slug} - {config.title}</title>
    <meta name='description' content='Where i showcase my art and photography.'>

    <meta property="og:title" content="{name} - {config.title}">
    <meta property="og:description" content="Where i showcase my art and photography.">
    <meta property="og:image" content="https://ik.imagekit.io/kr4ft/photo/{name}?tr=n-ik_ml_thumbnail">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<div class="main full">
    <p class="text2"><a class="text2" href="/gallery/photo">← Back to photos</a></p>
    <div class="viewerdiv">
        <Viewer
            bind:targetOffsetX={viewerOffsetXTarget}
            bind:targetOffsetY={viewerOffsetYTarget}
            bind:targetScale={viewerScaleTarget}
        >
            <img src="{url}" alt="{data.slug}">
        </Viewer>
        <div class="resetbutton" onclick={resetViewer} role="button" tabindex="0" onkeydown={(event) => (event.key === 'Enter' || event.key === ' ') && resetViewer()}>
            <p class="text2" style="margin: 3px;">Reset zoom</p>
        </div>
    </div>
    <br>
    <p class="text2">File name: {name}</p>
    <p class="text2">Download link: <a class="text2 linking" href="{url}" target="_blank" download="{name}">Click here</a></p>
    <p class="text2" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a class="text2 linking" property="dct:title" rel="cc:attributionURL" href="https://kraafter.me{$page.url.pathname}">{ name }</a> by <a class="text2 linking" rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://kraafter.me/">Kraafter</a> is licensed under <a class="text2 linkin"href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p> 

</div>

<style>
    .resetbutton {
        position: absolute;
        z-index: 5;
        height: fit-content;
        width: fit-content;
        margin: 5px;
        bottom: 0px;
        right: 0px;
        background: rgb(50,50,50);
        border-radius: 5px;
        outline: 1px rgb(150, 150, 150) outset;
    }

    .viewerdiv {
        position: relative; 
        height:800px; 
        user-select: none; 
        border: 1px solid white; 
        background-image: url('/assets/img/TransparencyDark640.png')
    }

    .linking {
        background-color: rgba(61, 0, 160, 0.537);
    }

    p img {
        width: fit-content;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
    }

    .main{
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

    img {
        width: 100%;
    }

    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

    /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

        .main {
            margin: 0;
            background: transparent;
        }

        .text2 {
            font-size: 15px;
        }

        .full {
            padding: 15px;
        }
        .viewerdiv {
            height: 400px;
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
