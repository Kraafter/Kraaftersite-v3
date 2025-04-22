<script>
    import * as config from '$lib/config'
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Links - {config.title}</title>
    <meta name='description' content='Where you can find and get in touch with me (Mastodon, Twitter, Discord, Bluesky, etc.)'>

    <meta property="og:title" content="Links - {config.title}">
    <meta property="og:description" content="Where you can find and get in touch with me (Mastodon, Twitter, Discord, Bluesky, etc.)">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text1">🔗Social links</p>
        <p class="text2">Services where you are able to get in touch with me, some more active while some not so much:</p>
    </div>
    <div class="main4 top">
        <a href="https://github.com/Kraafter/" target="_blank" class="linkitem2">
            <p class="text3">🔀 Github</p>
        </a>
        <a href="https://furry.engineer/@kraafter" target="_blank" class="linkitem2">
            <p class="text3">🐘 Mastodon</p>
        </a>
    </div>
    <div class="main3">
        <div class="main2">
            <a href="https://bsky.app/profile/kraaftoast.fursona.club" target="_blank" class="linkitem">
                <p class="text3">⛅ Bluesky</p>
            </a>
            <a href="https://x.com/Kraaftoast" target="_blank" class="linkitem">
                <p class="text3">🐤 Xitter</p>
            </a>
            <a href="https://www.instagram.com/kraaftoast/" target="_blank" class="linkitem">
                <p class="text3">📷 Instagram</p>
            </a>
        </div>
        <div class="main2">
            <a href="https://www.youtube.com/@kraafter/" target="_blank" class="linkitem">
                <p class="text3">▶️ YouTube</p>
            </a>
            <a href="https://hosted.weblate.org/user/kraafter/" target="_blank" class="linkitem">
                <p class="text3">🔁 Weblate</p>
            </a>
            <a href="https://www.last.fm/user/Kraafter" target="_blank" class="linkitem">
                <p class="text3">🎵 Last.fm</p>
            </a>
        </div>
    </div>
    <div class="main">
            <p class="text2" style="margin-left: 5px; margin-top:30px">🔗Less active</p>
            <ul>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://www.reddit.com/user/profacecrafted/" target="_blank" class="text2 linking">⛄ Reddit</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://www.instagram.com/kraafters/" target="_blank" class="text2 linking">📷 Instagram Alt</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://bsky.app/profile/kraafter.me/" target="_blank" class="text2 linking">⛅ Bluesky Alt</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://twitter.com/kraafter" target="_blank" class="text2 linking">🐤 Xitter Alt</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://www.facebook.com/profile.php?id=100082218231911" target="_blank" class="text2 linking">👍 Facebook</a>
                    </p>
                </li>
    </div>
</main>

<style>

    .linking {
        color: #1CE9D4 !important;
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
        color: #1CE9D4 !important;
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
            padding: 0;
            margin: 5px;
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