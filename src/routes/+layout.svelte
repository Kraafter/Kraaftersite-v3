<script>
    export let data;
  
    import { fly } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";

    import splashes from '$lib/file/splash.json';
    const splash = splashes.splashes[Math.floor(Math.random() * splashes.splashes.length)];;

  </script>

<main class="body">
    <nav class="nav">
        <a href="/">
            <div class="logo"></div>
        </a>
        <a href="/" style="text-decoration: none;">
            <div style="display: flex; align-items:baseline; gap:10px">
                <h1 class="text1" style="font-size: 60px;">Kraaftersite</h1>
                <p class="textmc" style="font-size: 20px;">{String(splash)}</p>
            </div>
        </a>
        <div class="navlayout">
            <a href="/"> <p class="text1" style="font-size: 20px">Home</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href="/blog"> <p class="text1" style="font-size: 20px">Blog</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href="/projects"> <p class="text1" style="font-size: 20px">Projects</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href="/gallery"> <p class="text1" style="font-size: 20px">Gallery</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href="/link"> <p class="text1" style="font-size: 20px">Links</p></a>
        </div>
    </nav>
    {#key data.url}
        <div style="height: fit-content; min-height:500px; width: 100%; display:flex; align:center; padding:0" in:fly={{duration: 500, x:-100, delay: 500, easing:cubicOut}} out:fly={{duration: 500, x:100, easing:cubicIn}}>
            <slot />
        </div>
    {/key}

    <footer>
        <div class='foot'>
            <iframe title="Johnvertisement!" src="https://john.citrons.xyz/embed?ref=https://kraafter.me" style="margin-left:auto;display:block;margin-right:auto;max-width:732px;width:100%;height:94px;border:none;margin-top:20px"></iframe>
            <div class="footlink">
                <a href='/privacy'><p class='text1'>Privacy Policy</p></a>
                <a href='/contact'><p class='text1'>Contact Me</p></a>
                <a target="_blank" href='https://github.com/Kraafter/Kraaftersite-v3'><p class='text1'>Source Code</p></a>
            </div>
            <p class='text1'>Copyright © 2024 Kraafter</p>
        </div>
    </footer>
</main>

<style>
    @import url('https://fonts.cdnfonts.com/css/minecraft-3');

    :global(html,body) {
        margin:0;
        background-color: rgb(31, 31, 31);
        min-height: 300px;
        height: fit-content;
    }

    .body {
        min-height: 300px;
        height: fit-content;
    }

    .nav {
        width:100vw-20px;
        max-width: 100vw;
        height: 100px;
        padding:20px;
        gap: 10px;
        display: flex;
        align-items: center;
        background: linear-gradient(180deg, rgba(46, 46, 46, 0.8) 0%, rgba(46, 46, 46,0.6) 80%, rgba(46, 46, 46,0.5) 87%, rgba(46, 46, 46,0.35) 94%, rgba(46, 46, 46,0) 100%);
    }

    .foot {
        width: 100%;
        height: fit-content;
        background-color: rgba(46, 46, 46,1);
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }

    .footlink {
        width: fit-content;
        align-items:center;
        display: flex;
        flex-direction: row;
        gap: 10px
    }

    .logo {
        border-radius: 25px;
        width: 80px;
        height: 80px;
        background-color: rgb(93, 93, 93);
    }

    .navlayout {
        display: flex;
        margin-left: auto;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
    }

    .textmc {
        font-family: 'Minecraft';
        text-align: center;
        color: rgb(221, 255, 0);
        margin: -20.5% 0 0 -10%;
        transform: rotate(-10deg);
        animation: FlashingText ease-in-out 0.5s infinite;
        z-index:3;
        position: relative;
    }

    @keyframes FlashingText {
        0% {
            transform: scale(1) rotate(-10deg);
        }
        50% {
            transform: scale(1.05) rotate(-10deg);
        }
        100% {
            transform: scale(1) rotate(-10deg);
        }
    }

</style>