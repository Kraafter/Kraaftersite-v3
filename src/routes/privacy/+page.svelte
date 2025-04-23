<script>
    import * as config from '$lib/config'
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Privacy - {config.title}</title>
    <meta name='description' content='Privacy policy regarding this website'>

    <meta property="og:title" content="Privacy - {config.title}">
    <meta property="og:description" content="Privacy policy regarding this website.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <p class="text1">📰 Privacy Policy</p>
    <p class="text2">
        This website in no way whatsoever collects data other than server logs (IP address, user agent, geolocation, accessed paths) only visible to the hosting provider and webmaster. This data is collected only for operational purposes and can't be associated with any user.
    </p>
    <p class="text2">
        This may differ when it comes to embeds as they may need to interact with certain cookies in order to function. The most notable is Uttertances which interacts with GitHub credential cookies for user identification of commenters. The Utterances used within this site won't interact with your GitHub cookies until you authorize access for this site by logging in.
    </p>
    <p class="text2">
        This website also uses some external service providers. Their names, usage, privacy policy, and metrics I can view, are listed below:
        <ul class="text2" style="margin-left: 20px;">
            <li>Vercel: <a class="text2 linking" href="https://vercel.com/legal/privacy-policy">Hosting (User agent, accessed links/functions)</a></li>
            <li>Namecheap: <a class="text2 linking" href="https://www.namecheap.com/legal/general/privacy-policy/">Domain registrar</a></li>
            <li>Cloudflare: <a class="text2 linking" href="https://www.cloudflare.com/privacypolicy/">DNS management (Region trend, resolve percentage)</a></li>
            <li>Utterances: <a class="text2 linking" href="https://github.com/productinfo/utterances/blob/master/PRIVACY-POLICY.md">Blog commenting (GitHub cookie)</a></li>
            <li>Johnvertisements: <a class="text2 linking" href="https://john.citrons.xyz/">Johnvertisements</a></li>
            <li>ImageKit: <a class="text2 linking" href="https://imagekit.io/privacy-policy-new/">Image hosting (Accessed images)</a></li>
            <li>Github: <a class="text2 linking" href="https://docs.github.com/en/site-policy/privacy-policies">Listing project details through their api, utterances cookie</a></li>
        </ul>
</main>

<style>

    .linking {
        color: #1CE9D4 !important;
        padding: 0 !important;
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
        width: 50%;
    }

    .main4{
        display:flex;
        flex-direction: row;
        width: 100%;
    }

    .main3{
        display:flex;
        flex-direction: row;
    }

    .linkitem {
        width: 33%;
        height: 35px;
        margin: 5px;
        border-radius: 3px;
        background-color: rgb(50,50,50);
        border-width: thin;
        border-style: outset;
        border-color: aliceblue;
    }

    .linkitem2 {
        width: 50%;
        height: 35px;
        margin: 5px;
        border-radius: 3px;
        background-color: rgb(50,50,50);
        border-width: thin;
        border-style: outset;
        border-color: aliceblue;
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

    .text3 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
        padding: auto;
        text-align: center;
        width: fit-content;
        margin: auto;
        margin-top: 3px;
    }

    @media (max-width: 768px) {

    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {
        .main2 {
            margin: 0px 5px;
            margin-top: 10px;
            flex-direction: column;
        }

        .main4 {
            margin: 0px 5px;
            margin-top: 10px;
            flex-direction: column;
        }

        .full {
            padding: 0px;
            margin: 5px;
            width: 100%;
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

        .text3 {
            font-size: 15px;
            margin-top: 6px;
        }

        .linkitem {
            width: calc(100% - 10px);
        }

        .linkitem2 {
            width: calc(100% - 20px);
        }

        .top {
            margin: 0px 5px;
        }
    }
</style>