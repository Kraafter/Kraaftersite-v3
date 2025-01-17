<script lang="ts">
    import * as config from '$lib/config'
    import { page } from '$app/stores';

</script>

<svelte:head>
    <title>Branding - {config.title}</title>
    <meta name='description' content="Information about my brand.">

    <meta property="og:title" content="Branding - {config.title}">
    <meta property="og:description" content="Information about my brand.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <p class="text1">🆔 Brand</p>
        <p class="text2">About my logo and personal branding.</p>
        <p class="text2">Note: Some items here are not yet final.</p>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
        
        <div class="sidebyside">
            <div class="sideleft">
                <p class="textm">Content</p>
                <ol>
                    <li class="texttoc"><a class="texttoc linking" href="#logo">Logo</a></li>
                    <li class="texttoc"><a class="texttoc linking" href="#colorscheme">Color Scheme</a></li>
                    <li class="texttoc"><a class="texttoc linking" href="#typography">Typography</a></li>
                </ol>
            </div>
            <div class="sideright">
                <p class="text2">
                    I think it's pretty cool to have some form of design to represent
                    myself in the digital world. I become somewhat fond in designing
                    logos years ago when I started my YouTube channel. I've made multiple
                    iterations of my logo from time to time but it's mostly an evolution
                    into what my logo currently is, like the colorful rainbow scheme in
                    my current logo that evolved from my old randomly-colored YouTube
                    channel banner.
                </p>
                <p class="text2">
                    Here, I've put some logo designs, brand-related design guidelines,
                    and simple use rules in case anyone would like to take referrence.
                </p>
                <p class="text1 texthead" id="logo">Logo</p>
                <p class="text2">
                    I've actually made a few variations for my logo, designated to be used
                    accordingly with their use cases. This is to help aid in reducing the
                    amount of space needed and make it more readable.
                </p>
                <p class="text2"><br>Light as surrounding color scheme</p>
                <ul>
                    <li class="text2">
                        <p class="text2">Large</p>
                        <img
                            src="/assets/logo/light/large.webp"
                            loading="lazy"
                            class="articleimg1"
                            style="background-color: aliceblue;"
                            alt="The light color scheme large variant for Kraafter's logo"
                        >
                    </li>
                    <li class="text2">
                        <p class="text2">Medium</p>
                        <img
                            src="/assets/logo/light/medium.webp"
                            loading="lazy"
                            class="articleimg2"
                            style="background-color: aliceblue;"
                            alt="The light color scheme medium variant for Kraafter's logo"
                        >
                    </li>
                    <li class="text2">
                        <p class="text2">Small</p>
                        <img
                            src="/assets/logo/light/small.webp"
                            loading="lazy"
                            class="articleimg3"
                            style="background-color: aliceblue;"
                            alt="The light color scheme small variant for Kraafter's logo"
                        >
                    </li>
                </ul>
                <p class="text2"><br>Dark as surrounding color scheme</p>
                <ul>
                    <li class="text2">
                        <p class="text2">Large</p>
                        <img
                            src="/assets/logo/dark/large.webp"
                            loading="lazy"
                            class="articleimg1"
                            style="background-color: rgb(50,50,50);"
                            alt="The light color scheme large variant for Kraafter's logo"
                        >
                    </li>
                    <li class="text2">
                        <p class="text2">Medium</p>
                        <img
                            src="/assets/logo/dark/medium.webp"
                            loading="lazy"
                            class="articleimg2"
                            style="background-color: rgb(50,50,50);"
                            alt="The light color scheme medium variant for Kraafter's logo"
                        >
                    </li>
                    <li class="text2">
                        <p class="text2">Small</p>
                        <img
                            src="/assets/logo/dark/small.webp"
                            loading="lazy"
                            class="articleimg3"
                            style="background-color: rgb(50,50,50);"
                            alt="The light color scheme small variant for Kraafter's logo"
                        >
                    </li>
                </ul>
                <p class="text1 texthead" id="colorscheme">Color Scheme</p>
                <p class="text2">
                    There is nothing really special with the color scheme used on my site.
                    I also don't remember how I came up with it (it could be from my older
                    site iterations, or my fursona's colors). While it's origins are unknown,
                    I think I did a pretty okay job.
                </p>
                <table>
                    <tr>
                        <th><p class="text2">Usage</p></th>
                        <th><p class="text2">Dark (HEX)</p></th>
                        <th><p class="text2">Light (HEX)</p></th>
                    </tr>
                    <tr>
                        <td>
                            <p class="text2">Background</p>
                        </td>
                        <td>
                            <p class="text2"><span class="color-circle" style="background-color: #1f1f1f;"></span> #1f1f1f</p>
                        </td>
                        <td>
                            <p class="text2">Unavailable</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="text2">Foreground</p>
                        </td>
                        <td>
                            <p class="text2"><span class="color-circle" style="background-color: #323232;"></span> #323232</p>
                        </td>
                        <td>
                            <p class="text2">Unavailable</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="text2">Text</p>
                        </td>
                        <td>
                            <p class="text2"><span class="color-circle" style="background-color: #f0f8ff;"></span> #f0f8ff</p>
                        </td>
                        <td>
                            <p class="text2">Unavailable</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="text2">Accent and Link</p>
                        </td>
                        <td>
                            <p class="text2"><span class="color-circle" style="background-color: #3d00a0;"></span> #3d00a0</p>
                        </td>
                        <td>
                            <p class="text2">Unavailable</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="text2">Quote and Code Block</p>
                        </td>
                        <td>
                            <p class="text2"><span class="color-circle" style="background-color: #323232;"></span> #323232</p>
                        </td>
                        <td>
                            <p class="text2">Unavailable</p>
                        </td>
                </table>
                <br>
                <p class="text2">Yeaa I have not came up with a light mode color scheme, wip</p>
                <p class="text1 texthead" id="typography">Typography</p>
                <p class="text2">
                    <a class="text2 linking" href="https://tokotype.github.io/plusjakarta-sans/" target="_blank">Plus Jakarta Sans</a> is the main font used on my site.
                </p>
                <div class="quote">
                    <p class="text2" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                        The quick brown fox jumps over the lazy dog. 1234567890
                    </p>
                    <p class="text2" style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;">
                        The quick brown fox jumps over the lazy dog. 1234567890 (Bold)
                    </p>
                    <p class="text2" style="font-family: 'Plus Jakarta Sans', sans-serif; font-style: italic;">
                        The quick brown fox jumps over the lazy dog. 1234567890 (Italic)
                    </p>
                    <p class="text2" style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-style: italic;">
                        The quick brown fox jumps over the lazy dog. 1234567890 (Bold Italic)
                    </p>
                </div>
                <br>
                <p class="text2">
                    I also use <a class="text2 linking" href="https://github.com/IBM/plex" target="_blank">IBM Plex</a> as the monospace font for showing code bits.
                </p>
                <div class="quote">
                    <p class="text2" style="font-family: 'IBM Plex Mono', monospace;">
                        The quick brown fox jumps over the lazy dog. 1234567890
                    </p>
                    <p class="text2" style="font-family: 'IBM Plex Mono', monospace; font-weight: 700;">
                        The quick brown fox jumps over the lazy dog. 1234567890 (Bold)
                    </p>
                    <p class="text2" style="font-family: 'IBM Plex Mono', monospace; font-style: italic;">
                        The quick brown fox jumps over the lazy dog. 1234567890 (Italic)
                    </p>
                    <p class="text2" style="font-family: 'IBM Plex Mono', monospace; font-weight: 700; font-style: italic;">
                        The quick brown fox jumps over the lazy dog. 1234567890 (Bold Italic)
                    </p>
                </div>
                <p class="text1 texthead">Credits</p>
                <p class="text2">
                    Please do note that this page, which will become the default layout for blog posts,
                    is heavily inspired by <a class="text2 linking" href="https://beeps.website/">beeps</a>.
                    More specifically, their own Branding page at <a class="text2 linking" href="https://beeps.website/brand">beeps.website/brand</a>.
                    Special thanks ^^
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    tr{
        border-bottom: 1px solid #f0f8ffaf;
    }

    tr:last-child{
        border-bottom: none;
    }

    tr:first-child{
        border-bottom: 4px solid #f0f8ffaf;
    }

    .quote {
        padding: 10px;
        border-radius: 5px;
        width: fit-content;
        border-left: 15px solid #3d00a0;
        border-radius: 5px;
        margin-left: 20px;
        background-color: #323232;
    }

    .color-circle {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #000;
        margin-right: 8px;
        vertical-align: middle;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .articleimg1 {
        width: 500px;
    }

    .articleimg2 {
        width: 200px;
    }

    .articleimg3 {
        width: 125px;
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

    .text1 {
        font-family: monospace;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
    }

    .textm {
        font-family: monospace;
        color: aliceblue;
        font-size: 25px;
        padding: 10px;
        margin-bottom: 0;
    }

    .text2 {
        font-family: monospace;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    .texttoc{
        font-family: monospace;
        color: #f0f8ff;
        font-size: 20px;
        padding: 0;
        margin-left: 10px;
    }

    .texthead {
        margin-top: 50px;
    }

    @media (max-width: 768px) {

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

        .full {
            padding: 10px;
            margin: 25px;
        }

        .text1 {
            font-size: 25px;
            padding-bottom: 0px;
        }

        .text2 {
            font-size: 15px;
            padding-top: 0px;
        }

        .sidebyside {
            flex-direction: column;
        }

        .sideleft {
            width: 100%;
            margin-bottom: 30px;
        }

        img {
            max-width: 200px;
        }

        .sideright {
            margin-left: 0;
            width: 100%;
        }

        .textm {
            font-size: 23px;
        }
    }
</style>