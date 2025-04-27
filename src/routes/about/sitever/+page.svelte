<script>
    import * as config from '$lib/config';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Version Archive - {config.title}</title>
    <meta name='description' content='Historic site versions from v1 up to v2.'>

    <meta property="og:title" content="Version Archive - {config.title}">
    <meta property="og:description" content="Historic site versions from v1 to v2.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main id="main" class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <h1>📆 Version Archive</h1>
        <p class="text2">This part of the website lists past versions of my website. Basically a little memento on how my skills developed over time.</p>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
        
        <div class="sidebyside">
            <div class="sideleft">
                <p class="textm">Content</p>
                <ol>
                    <li class="texttoc"><a class="texttoc linking" href="#version1">📰 V1</a></li>
                    <li class="texttoc"><a class="texttoc linking" href="#version2">📰 V2</a></li>
                </ol>
            </div>
            <div class="sideright">
                <p class="text2">Unfortunately, I can't list past versions of website v3 at the moment.</p>
                <h2 id="version1">📰 V1</h2>
                <ul>
                    <li class="text2" style="padding: 0px;">Added link to v2 preview (Last of v1): <a class="linking text2" target="_blank" href="https://d49547a8.kraaftersite.pages.dev/">https://d49547a8.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Rework announcement: <a class="linking text2" target="_blank" href="https://98c780f6.kraaftersite.pages.dev/">https://98c780f6.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Layout rework: <a class="linking text2" target="_blank" href="https://3a572ff3.kraaftersite.pages.dev/">https://3a572ff3.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Added YouTube channel embed: <a class="linking text2" target="_blank" href="https://31e2442f.kraaftersite.pages.dev/">https://31e2442f.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Fixed Discord embed sizing: <a class="linking text2" target="_blank" href="https://0b6ef135.kraaftersite.pages.dev/">https://0b6ef135.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Removed Microsoft Clarity Analytics: <a class="linking text2" target="_blank" href="https://ca1bedad.kraaftersite.pages.dev/">https://ca1bedad.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Fixed might-be-working Microsoft Clarity analytics opt out: <a class="linking text2" target="_blank" href="https://68e299ed.kraaftersite.pages.dev/">https://68e299ed.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Layout refresh: <a class="linking text2" target="_blank" href="https://c9e2596b.kraaftersite.pages.dev/">https://c9e2596b.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Added broken Microsoft Clarity opt out: <a class="linking text2" target="_blank" href="https://a4ac2a34.kraaftersite.pages.dev/">https://a4ac2a34.kraaftersite.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Version 1.0 (Where it all began): <a class="linking text2" target="_blank" href="https://03d71c66.kraaftersite.pages.dev/">https://03d71c66.kraaftersite.pages.dev/</a></li>
                </ul>
                <h2 id="version2">📰 V2</h2>
                <ul>
                    <li class="text2" style="padding: 0px;">V3 preview announcement (Last of v2): <a class="linking text2" target="_blank" href="https://8c9e5019.kraaftersite-v2.pages.dev/">https://8c9e5019.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Image optimization: <a class="linking text2" target="_blank" href="https://fc72a822.kraaftersite-v2.pages.dev/">https://fc72a822.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Buttons: <a class="linking text2" target="_blank" href="https://2c74c531.kraaftersite-v2.pages.dev/">https://2c74c531.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Domain change, meta changed from .tech to .me: <a class="linking text2" target="_blank" href="https://ebe99765.kraaftersite-v2.pages.dev/">https://ebe99765.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Contacts, privacy policy, and gallery page added: <a class="linking text2" target="_blank" href="https://22fa91c8.kraaftersite-v2.pages.dev/">https://22fa91c8.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Links page added: <a class="linking text2" target="_blank" href="https://fa859e67.kraaftersite-v2.pages.dev/">https://fa859e67.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">YouTube channel embed added: <a class="linking text2" target="_blank" href="https://2f613697.kraaftersite-v2.pages.dev/">https://2f613697.kraaftersite-v2.pages.dev/</a></li>
                    <li class="text2" style="padding: 0px;">Version 2.0 (A new start): <a class="linking text2" target="_blank" href="https://768d35a3.kraaftersite-v2.pages.dev/">https://768d35a3.kraaftersite-v2.pages.dev/</a></li>
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
        color: #1CE9D4 !important;
        padding: 0 !important;
    }

    .linking:visited {
        color: rgb(24, 180, 164) !important;
    }

    .linking:hover {
        color: #37fce8;
        text-decoration: underline;
        text-decoration-color: #1CE9D4;
        text-decoration-thickness: 2px;
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

    h1 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
        font-weight: 700;
    }

    h2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
        margin-top: 50px;
        font-weight: 600;
    }

    .textm {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 25px;
        padding: 10px;
        margin-bottom: 0;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
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
    

    .textcaption {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 17px;
        padding: 10px;
        margin-bottom: 0;
        margin-top: 0;
        border-bottom: #f0f8ff 1px solid;
        width: calc(100% - 20px);
        padding: 0;
        padding-left: 3px;
        margin-left: 10px;
    }

    @media (max-width: 768px) {
        .texttoc {
            font-size: 15px;
        }
    }

    @supports (-moz-appearance: none) {
        @media (max-width: 768px) {
            h1 {
                width: 100% !important;
            }

            h2 {
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
            padding: 0px;
            margin: 5px;
            background: transparent;
        }

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

        .text2 {
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

        .sideleft .texttoc {
            font-size: 19px;
        }

        .sideright {
            margin-left: 0;
            width: 100%;
        }
    }
</style>