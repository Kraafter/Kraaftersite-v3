<!-- @migration-task Error while migrating Svelte code: `<a>` is invalid inside `<a>` -->
<script>
    export let data;
  
    import { fly } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";

    import splashes from '$lib/file/splash.json';
    const splash = splashes.splashes[Math.floor(Math.random() * splashes.splashes.length)];;
  </script>

<main class="body">
    <nav class="nav">
        <a href="/" style="text-decoration: none;">
            <div style="display: flex; align-items:center; gap:10px">
                <a href="/">
                    <div class="logo"><img alt="kraafter logo" src="/assets/logo/dark/medium_300.webp"></div>
                </a>
                <h1 class="text1">Kraaftersite</h1>
                <p class="textmc">{String(splash)}</p>
            </div>
        </a>
        <div class="navlayout">
            <a href="/"> <p class="text2 topbar">Home</p></a><p class="text2">  |  </p>
            <a href="/blog"> <p class="text2 topbar">Blog</p></a><p class="text2">  |  </p>
            <a href="/projects"> <p class="text2 topbar">Projects</p></a><p class="text2">  |  </p>
            <a href="/gallery"> <p class="text2 topbar">Gallery</p></a><p class="text2">  |  </p>
            <a href="/link"> <p class="text2 topbar">Links</p></a>
        </div>
    </nav>
    {#key data.url}
        <div class="slotcontain" in:fly={{duration: 500, x:-100, delay: 500, easing:cubicOut}} out:fly={{duration: 500, x:100, easing:cubicIn}}>
            <slot />
        </div>
    {/key}

    <footer>
        <div class='foot'>
            <iframe class="john" title="Johnvertisement!" src="https://john.citrons.xyz/embed?ref=https://kraafter.me"></iframe>
            <div class="footlink">
                <a href='/privacy'><p class='text3'>Privacy Policy</p></a>
                <p class="text3"> | </p>
                <a href='/contact'><p class='text3'>Contact Me</p></a>
                <p class="text3"> | </p>
                <a target="_blank" href='https://github.com/Kraafter/Kraaftersite-v3'><p class='text3'>Source Code</p></a>
            </div>
            <p class='text3'>Copyright © 2025 Kraafter</p>
        </div>
    </footer>
</main>

<style>
    @import url('https://fonts.cdnfonts.com/css/minecraft-3');

    .john {
        margin-left:auto;
        display:block;
        margin-right:auto;
        max-width:732px;
        width:100%;
        height:94px;
        border:none;
        margin-top:20px
    }

    .topbar {
        padding-left: 5px;
        padding-right: 5px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    :global(html,body) {
        margin:0;
        background-color: rgb(31, 31, 31);
        min-height: 300px;
        height: fit-content;
        width:100%
    }

    .body {
        min-height: 300px;
        height: fit-content;
        width: 100%;
    }

    .nav {
        height: fit-content;
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
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 40px;
        font-weight: 700;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
    }

    .text3 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
    }

    .textmc {
        font-family: 'Minecraft';
        text-align: center;
        color: rgb(221, 255, 0);
        margin: 0 0 0 -10%;
        transform: rotate(-10deg) skew(10deg);
        animation: FlashingText ease-in-out 0.5s infinite;
        z-index:3;
        position: relative;
        font-size: 20px;
    }

    .slotcontain {
        height: fit-content;
        min-height:calc(100vh - 300px);
        width: 100%;
        display:flex;
        align-self:center;
        padding:0
    }

    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

    /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {
        .textmc {
            margin: 10% 0 0 -20%;
            font-size: 15px;
        }

        .logo {
            width: 50px;
            height: 50px;
            border-radius: 10px;
        }

        .text1 {
            font-size: 30px;
        }

        .text2 {
            font-size: 15px;
        }

        .text3 {
            font-size: 10px;
        }

        .footlink a {
            font-size: 15px;
        }

        .footlink p {
            font-size: 15px;
        }

        .navlayout p {
            font-size: 15px;
        }

        .john {
            max-width:350px;
            width:100%;
            height:60px;
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

    @keyframes FlashingText {
        0% {
            transform: scale(1) rotate(-10deg) skew(10deg);
        }
        50% {
            transform: scale(1.05) rotate(-10deg) skew(10deg);
        }
        100% {
            transform: scale(1) rotate(-10deg) skew(10deg);
        }
    }

</style>