<script lang="ts">
    import * as config from '$lib/config'
    import { page } from '$app/stores';

</script>

<svelte:head>
    <title>Website - {config.title}</title>
    <meta name='description' content="Information about what technologies are behind the website.">

    <meta property="og:title" content="Website - {config.title}">
    <meta property="og:description" content="Information about what technologies are behind the website.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <p class="text1">🕸 Website</p>
        <p class="text2">Information about what technologies are behind the website.</p>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
        
        <div class="sidebyside">
            <div class="sideleft">
                <p class="textm">Content</p>
                <ol>
                    <li class="texttoc"><a class="texttoc linking" href="#technologies">Technologies</a></li>
                    <li class="texttoc"><a class="texttoc linking" href="#helpers">Helpers</a></li>
                    <li class="texttoc"><a class="texttoc linking" href="#inspiration">Inspirations</a></li>
                </ol>
            </div>
            <div class="sideright">
                <p class="text2">
                    This website wouldn't be possible without the help of a few technologies, friends, and
                    inspiration from others.
                </p>
                <p class="text2">
                    This page is dedicated to explain technologies used in detail, as well as credit those whose
                    work has inspired me.
                </p>
                <p class="text1 texthead" id="technologies">Technlogies</p>
                <p class="text2">This site was made using the following technologies</p>
                <ul>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://svelte.dev/">Svelte</a> - A JavaScript framework for building user interfaces and apps.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://www.typescriptlang.org/">TypeScript</a> - A typed superset of JavaScript that compiles to plain JavaScript.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://www.imagekit.io/">ImageKit</a> - A cloud-based image optimization and transformation service. I'm using it for my website's gallery functionality.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://www.vercel.com/">Vercel</a> - A cloud platform for static sites and serverless functions.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://www.cloudflare.com/">Cloudflare</a> - A web infrastructure and website security company. I'm using its DNS.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://getbootstrap.com/">Bootstrap</a> - A popular CSS framework for developing responsive and mobile-first websites.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://nodejs.org/">Node.js</a> - A JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://www.markdownguide.org/">Markdown</a> - A lightweight markup language with plain text formatting syntax.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a class="text2 linking" href="https://yarnpkg.com/">Yarn</a> - A package manager that doubles down as project manager.</p>
                    </li>
                </ul>
                <p class="text1 texthead" id="helpers">Helpers</p>
                <p class="text2">I was assisted by a few people while making this website.</p>
                <ul>
                    <li class="text2">
                        <p class="text2"><a href="https://nkko.me/" class="text2 linking">Undrscre</a> - Helping me with Svelte in general (please put your site back up again I'm not done glazing over it)</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a href="https://joyofcode.xyz/sveltekit-markdown-blog" class="text2 linking">Joy of Code</a> - An in-depth explanation on how to make a markdown based blog system.</p>
                    </li>
                </ul>
                <p class="text1 texthead" id="inspiration">Inspirations</p>
                <p class="text2">I was inspired by a few websites while making this one.</p>
                <ul>
                    <li class="text2">
                        <p class="text2"><a href="https://www.nkko.me/" class="text2 linking">Undrscre</a> - A website made by Undrscre, which was an awesome site with a sick design.</p>
                    </li>
                    <li class="text2">
                        <p class="text2"><a href="https://beeps.website/" class="text2 linking">Beeps</a> - A website made by Beeps, which I think is one of the best furry websites out there.</p>
                    </li>

                </ul>
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