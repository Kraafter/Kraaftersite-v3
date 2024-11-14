<script>
    import * as config from '$lib/config'
</script>

<svelte:head>
    <title>Links - {config.title}</title>
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text1">🔗Social links</p>
        <p class="text2">Here are where to find and get in touch with me:</p>
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
                        <a href="https://www.reddit.com/user/profacecrafted/" target="_blank" class="text2">⛄ Reddit</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://www.instagram.com/kraafters/" target="_blank" class="text2">📷 Instagram Alt</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://bsky.app/profile/kraafter.me/" target="_blank" class="text2">⛅ Bluesky Alt</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://twitter.com/kraafter" target="_blank" class="text2">🐤 Xitter Alt</a>
                    </p>
                </li>
                <li class="text2" style="padding: 0;">
                    <p class="text2" style="padding: 0;">
                        <a href="https://www.facebook.com/profile.php?id=100082218231911" target="_blank" class="text2">🇫 Facebook</a>
                    </p>
                </li>
    </div>
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
    }

    .main{
        margin: 80px;
        margin-top: 5px;
        background-color: rgba(80, 80, 80, 0.6);
        display:flex;
        flex-direction: column;
        padding: 20px;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
    }
</style>