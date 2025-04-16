<!-- @migration-task Error while migrating Svelte code: `<a>` is invalid inside `<a>` -->
<script lang="ts">
  
    import { fly } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";

    import splashes from '$lib/file/splash.json';
	import { prefersReducedMotion } from "svelte/motion";
    let { data, children } = $props();
    const splash = splashes.splashes[Math.floor(Math.random() * splashes.splashes.length)];;
  </script>

<div class="body">
    <header class="nav" id="top">
        <a class="skip-link" href='#main'>Skip to content</a>
        <a href="/" style="text-decoration: none;">
            <div style="display: flex; align-items:center; gap:10px">
                <div class="logo"><img alt="kraafter logo" src="/assets/logo/dark/medium_300.webp"></div>
                <p class="text1" style="margin-bottom: 0;">Kraaftersite</p>
                <p class="textmc">{String(splash)}</p>
            </div>
        </a>
        <nav class="navlayout">
            <ul>
                <li><a href="/"> <p class="text2 topbar">Home</p></a></li>
                <li><a href="/blog"> <p class="text2 topbar">Blog</p></a></li>
                <li><a href="/projects"> <p class="text2 topbar">Projects</p></a></li>
                <li><a href="/gallery"> <p class="text2 topbar">Gallery</p></a></li>
                <li><a href="/link"> <p class="text2 topbar">Links</p></a></li>
            </ul>
        </nav>
    </header>

    {#key data.url}
    <div class="slotcontain" in:fly={{duration: prefersReducedMotion.current ? 0 : 500, x:-100, delay:  prefersReducedMotion.current ? 0 : 500, easing:cubicOut}} out:fly={{duration:  prefersReducedMotion.current ? 0 : 500, x:100, easing:cubicIn}}>
        {@render children?.()}
    </div>
    {/key}

    <footer>
        <div class='foot'>
            <iframe class="john" title="Johnvertisement!" src="https://john.citrons.xyz/embed?ref=https://kraafter.me"></iframe>
            <div class="footlink">
                <a href='/privacy'><p class='text3 linking'>Privacy Policy</p></a>
                <p class="text3"> | </p>
                <a href='/contact'><p class='text3 linking'>Contact Me</p></a>
                <p class="text3"> | </p>
                <a target="_blank" href='https://github.com/Kraafter/Kraaftersite-v3'><p class='text3 linking'>Source Code</p></a>
                <p class="text3"> | </p>
                <a href='#top'><p class='text3 linking'>Back to Top</p></a>
            </div>
            <p class="text3"><a href="https://github.com/Kraafter/Kraaftersite-v3/blob/main/LICENSE" target="_blank" class="text3 linking">Code licensed under the MIT license</a> | <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" class="text3 linking">Contents licensed under CC BY-NC-SA 4.0</a></p>
            <p class='text3'>Copyright © 2025 Kraafter</p>
        </div>
    </footer>
</div>

<style>
    @import url('https://fonts.cdnfonts.com/css/minecraft-3');

    .linking {
        color: #1CE9D4 !important;
        text-decoration: underline;
    }

    .linking:visited {
        color: #2cc9ba;
    }

    .linking:hover {
        color: #37fce8;
        text-decoration-color: #ffffff;
        text-decoration-thickness: 2px;
    }

    .skip-link {
        background: #ffffff;
        color: #000000;
        font-weight: 700;
        left: 50%;
        padding: 4px;
        position: absolute;
        transform: translateY(-500%);
        font-family: plus_jakarta_sansregular;
    }

        .skip-link:focus {
        transform: translateY(0%);
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    nav ul li {
        float: left;
    }

    nav ul li:not(:last-child) {
        border-right: 2px aliceblue solid;
    }

    nav ul li a p{
        margin-bottom: 0;
        margin-left: 3px;
        margin-right: 3px;
    }

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
        overflow-wrap:anywhere;
    }

    @media (prefers-reduced-motion) {
        .textmc {
            animation: unset !important;
        }
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