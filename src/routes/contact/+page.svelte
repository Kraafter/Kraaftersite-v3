<script>
    import * as config from '$lib/config';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Contacts - {config.title}</title>
    <meta name='description' content='Multiple ways to contact me (email, sns, etc.)'>

    <meta property="og:title" content="Contacts - {config.title}">
    <meta property="og:description" content="Multiple ways to contact me (email,sns, etc.)">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <p class="text1">🔊 Contact Me</p>
    <p class="text2">There are multiple ways to contact me, giving you a lot of flexibility. However, I encourage you to use each communication channel according to their defined usage.</p>
    <p class="text2">For business related inquiries, you may contact me through my work email at <a class="text2 linking" href="mailto:&#098;&#117;&#115;&#105;&#110;&#101;&#115;&#115;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;">&#098;&#117;&#115;&#105;&#110;&#101;&#115;&#115;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;</a></p>
    <p class="text2">For casual or less important inquiries, you may contact me through either my general usage email <a class="text2 linking" href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;">&#104;&#101;&#108;&#108;&#111;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;</a>, my Discord at @kraaft, or <a class="text2 linking" target="_blank" href="https://furry.engineer/@kraafter">Mastodon</a>.You may also contact through messaging functions available in some services at <a class="text2 linking" href="/link">my social links</a>.</p>
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
    }

    .linking {
        background-color: rgba(61, 0, 160, 0.537);
        padding: 0;
    }

    @media (max-width: 768px) {

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
    }
</style>