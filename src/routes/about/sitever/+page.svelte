<script>
    import * as config from '$lib/config';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Version Archive - {config.title}</title>
    <meta name='description' content='Historic site versions from v1 up to v2.'>

    <meta property="og:title" content="Version Archive - {config.title}">
    <meta property="og:description" content="Histroic site versions from v1 to v2">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <span style="width: 100%;">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <p class="text1">📆 Version Archive</p>
        <p class="text2">This part of the website lists past versions of my website. Basically a little memento on how my skills developed over time.</p>
        <p class="text2">Unfortunately, I can't list past versions of website v3 at the moment.</p>
        <p class="text2">📰 V2 Pure HTML, CSS, JS (Bootstrap Studio Template) (kraafter.tech to kraafter.me)</p>
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
        <p class="text2">📰 V1 Pure experimental and intro (was never actually completed) (kraafter.tech)</p>
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
    </span>
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
        width: 100%;
    }

    .linking {
        background-color: rgba(61, 0, 160, 0.537);
        padding: 0;
    }

    ul {
    overflow: auto;
    margin-left: 30px;
    }

    li {
    white-space: nowrap;
    }

    @media (max-width: 768px) {

    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {

        .full {
            padding: 10px;
            margin: 5px;
        }

        .text1 {
            font-size: 25px;
            padding-bottom: 0px;
        }

        .text2 {
            font-size: 15px;
            padding-top: 0px;
        }

        ul {
            margin-left: 0;
        }
    }
</style>