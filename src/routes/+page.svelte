<!-- @migration-task Error while migrating Svelte code: `<a>` is invalid inside `<a>` -->
<script lang="ts">
    import * as config from '$lib/config';
    import { formatDate } from '$lib/utils'
    import { page } from '$app/stores'
    let { data } = $props();
</script>

<svelte:head>
    <title>Home - {config.title}</title>
    <meta name='description' content='Kraafter&#39;s personal corner on the net'>
    <link rel="me" href="https://rhe.nerds.my.id/@kraafter">
    <link rel="me" href="https://furry.engineer/@kraafter">

    <meta property="og:title" content="Home - {config.title}">
    <meta property="og:description" content="Kraafter&#39;s personal corner on the net">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full" id="main">
    <div class="main">
        <div class="main2">
            <div class="maintext">
                <span style="height:fit-content; padding: 40px">
                    <h1 class="text1" style="margin:0">Hello, Kraafter here 👋</h1>
                    <a rel="me" href="https://rhe.nerds.my.id/@kraafter" style="visibility: hidden; font-size:0">rhe.nerds</a>
                    <a rel="me" href="https://furry.engineer/@kraafter" style="visibility: hidden; font-size:0">Mastodon</a>
                    <br>
                    <ul>
                        <li class="text2">Indonesian</li>
                        <li class="text2">Certified <a class="text2 linking" href="https://nerds.my.id/" target="_blank">nerd</a></li>
                        <li class="text2">Amateur programmer</li>
                        <li class="text2">Hobbyist</li>
                        <li class="text2">Kinda artist</li>
                        <li class="text2">Locale contributor</li>
                        <li class="text2">...and more about me over <a class="text2 linking" href="/about">here</a></li>
                    </ul>
                </span>
            </div>
            <div class="mainimg">
                <a class="gliveimg" href="/about/fursona/glive"><img class="gliveimg" alt="Glive the protogen greeting visitors with a beep!" src='/assets/media/site/glivebeep.webp' /></a>
                <p class="text2" style="width: 100%; text-align:center;"><a class="text2 linking" href="/about/fursona/glive">Glive, the protogen</a></p>
            </div>
        </div>

        <hr style="width: 98%;">

        <div class="main3">
            <div class="">
                <span style="height:fit-content; width:33%">
                    <h1 class="text1 header2" style="margin:0">🔘 Check out these cool lookin' buttons!</h1>
                </span>
            </div>
            <div class="main2">
                <div class="mainimg">
                    <a href="/about/fursona/nord"><img class="gliveimg" alt="Nord the amphimorpho with an 88x31 button in his mouth" src='/assets/media/site/nordfloat.webp' /></a>
                    <p class="text2" style="width: 100%; text-align:center;"><a class="text2 linking" href="/about/fursona/nord">Nord, the amphimorpho</a></p>
                </div>
                <div class="maintext">

                    <h2 class="text2" style="text-align:right;">Friends</h2>
                    <span class="rightside" style="width: fit-content; gap:100px; height: fit-content; display:inline-block; float: none">
                        <a href="https://ryj.my.id/"><img src="https://ik.imagekit.io/kr4ft/misc/88x31.gif" alt="ryj.my.id button" title="ryu"></a>
                        <a href="https://finiteti.me/"><img src="https://finiteti.me/badge.png" alt="finiteti.me button" title="mefinity"></a>
                        <a href="https://daringcuteseal.github.io/"><img width="88px" height="31px" src="https://daringcuteseal.github.io/assets/image/button.png" alt="daringcuteseal.github.io button" title="daringcuteseal"></a>
                        <a href="https://ichisansfw.me/"><img width="88px" height="31px" src="/assets/img/ichi.gif" alt="ichisansfw.me button" title="ichisansfw"></a>
                        <a href="https://beepi.ng"><img src="https://beepi.ng/88x31.png" width="88" height="31" title="unnick" alt="unnick beepi.ng button"></a>
                        <a href="https://milkyway.moe/"><img alt="milkyway.moe button" title="milkyway" src="https://milkyway.moe/milkybuttons/milkybtn.gif"></a>
                        <a href="https://ivrry.nekoweb.org"><img alt="ivrry nekoweb button" title='ivory' src="https://ivrry.nekoweb.org/assets/images/button.png"></a>
                        <a href="https://synth.download"><img src="https://synth.download/assets/buttons/sneexy.svg" alt="Sneexy button" title="Sneexy"></a>
                    </span>

                    <h2 class="text2 collection" style="text-align:right;">Collection</h2>
                    <span class="rightside" style="width: fit-content; gap:100px; height: fit-content; display:inline-block; float: none">
                        <img src="https://cyber.dabamos.de/88x31/88x31.gif" alt="88x31" title="88x31">
                        <a href="https://nekoweb.org/"><img alt="Nekoweb.org button" src="https://nekoweb.org/assets/buttons/button5.gif" title="The webhost for cats!"></a>
                        <a href="https://beeps.website"><img src="https://beeps.website/assets/images/88x31-d.gif" alt="Beeps.website button | Dark blue and green animated button with Ash the amphimorpho" title="Dark blue and green animated button with Ash the amphimorpho" width="88" height="31" loading="lazy"></a>
                        <a href="https://tuxedodragon.art"><img alt="tuxedodragon button" title="tuxedodragon" src="https://tuxedodragon.art/tuxedodragon 88x31.gif"></a>
                        <a href="https://neo-neighborhoods.neocities.org/TimesSquare/"><img src="https://neo-neighborhoods.neocities.org/TimesSquare/times88.gif" width="88" height="31" title="neocities times square" alt="neocities times square button"></a>
                        <a href="https://dokode.moe/"><img src="https://dokode.moe/media/88x31sites/dokodemobutton3.gif" title="dokodemo" alt="dokode.moe button"></a>
                        <a href="https://pebble.pet/"><img src="https://pebble.pet/button.gif" title="pebble" alt="pebble.pet button"></a>
                        <a href="https://citrons.xyz/a/memetic-apioform-page.html"><img width="88" height="31" src="https://citrons.xyz/a/static/apiopage.png" alt="memetic apioform" title="memetic apioform"></a>
                    </span>

                    <h2 id="button-code-heading" class="text2 collection" style="text-align: right">Add my button to your site</h2>
                    <p class=text2 style="text-align: right; margin-left:auto"><a href="https://kraafter.me/"><img src="/assets/img/button.png" alt="Kraafter.me button" title="kraaftersite"></a></p>
                    <label for="html-code">Add my button to your site</label>
                    <textarea id="html-code" aria-labelledby="button-code-heading" style="margin-left: auto; float: right;color:aliceblue; background-color: rgb(50,50,50);" readonly><a href="https://kraafter.me/"><img src="https://kraafter.me/assets/img/button.png" alt="Kraafter.me button" title="kraaftersite"></a></textarea>
                </div>
            </div>
        </div>
        <hr style="width: 98%;">
        <div class=main3>
            <h1 class="text1 header2">💬 Recent blog posts</h1>
            <div class="blogview">
                {#each data.posts.slice(0,3) as post}
                    <div class="contentview">
                        <a href='/blog/{post.slug}' class="text2 linking">{post.title}</a>
                        <p class="text2">{formatDate(post.date)}</p>
                        <p class="text2">{post.description}</p>
                    </div>
                    <div class=divider></div>
                {/each}
            </div>
        </div>
        <hr style="width: 98%;">
        <div class="main3" style="width: 100%;">
            <h1 class="text1 header2">💍 Webrings</h1>
            <div class="blogview">
                <div class="contentview2">
                    <img alt="Rhe Nerds logo in a modern simplistic style resembling an O" class="gliveimg" style="height: 170px;" src="/assets/media/site/NerdsSymbolDark.webp">
                    <p class="text2" style="text-align:center">
                        <a aria-label="Nerds webring previous" class="text2 linking" href="https://ring.nerds.my.id/kraaft/previous">&lt;&lt;</a>
                        <a aria-label="Amphimorpho webring website" class="text2 linking" href="https://ring.nerds.my.id/">Rhenerds Webring (in progress)</a>
                        <a aria-label="Nerds webring next" class="text2 linking" href="https://ring.nerds.my.id/kraaft/next">&gt;&gt;</a>
                    </p>
                </div>
                <div class=divider style="margin:0"></div>
                <div class="contentview2">
                    <img alt="A blue-lightgrey amphimorpho with a bright smile" class="gliveimg" style="height: 170px;" src="/assets/media/site/kraaftnoodletr.webp">
                    <p class="text2" style="text-align:center">
                        <a aria-label="Amphimorpho webring previous" class="text2 linking" href="https://noodle-r.ing/kraaft/prev">&lt;&lt;</a>
                        <a aria-label="Amphimorpho webring website" class="text2 linking" href="https://noodle-r.ing/">Amphimorpho Webring</a>
                        <a aria-label="Amphimorpho webring next" class="text2 linking" href="https://noodle-r.ing/kraaft/next">&gt;&gt;</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</main>

<style>

    .collection {
        padding-top:50px;
    }

    textarea {
        width: calc(100% - 100px)
    }

    ul li {
        font-size: 30px !important;
    }

    ul li a {
        font-size: 30px !important;
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
    }

    .main{
        margin: 80px;
        margin-top: 5px;
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.4542836421678046) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
        display:flex;
        flex-direction: column;
    }

    .main2{
        display:flex;
        flex-direction: row;
        padding: 20px;
    }

    .maintext {
        width: calc(60% - 25px);
        height: fit-content;
        padding: 20px;
    }

    .mainimg {
        width: 40%;
        height: auto;
        padding-top: auto;
        padding-bottom: auto;
        display: flex;
        flex-direction: column;
    }

    .main3 {
        display: flex;
        flex-direction: column;
        padding: 20px;
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

    .rightside {
        float:right;
        text-align: right;
    }

    hr {
        border-top: 1px solid aliceblue !important;
        height: 1px !important;
    }

    .blogview {
        display: flex;
        flex-direction: row;
    }

    .contentview {
        padding: 5px;
        width: calc(33% - 1px);
        height: fit-content;
    }

    .contentview2 {
        padding: 5px;
        width: calc(50% - 1px);
        height: fit-content;
    }

    .divider {
        border-left:1px solid #ffffff;
        height: 200px;
        width: 0px;
        visibility: hidden;
        margin: auto auto 0 0;
    }

    .divider:not(:last-child) {
        visibility: unset !important;
    }

    .gliveimg {
        width: 100%;
        height: 100%;
        margin: auto !important;
        display: block;
        object-fit: contain;
    }

    .header2 {
        font-size: 30px;
    }

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


    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

    /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

        .main {
            margin: 0 !important;
            background: transparent;
        }
        
        .header2 {
            font-size: 25px;
        }

        .text1 {
            font-size: 30px;
        }

        .text2 {
            font-size: 15px;
        }

        .main2 {
            margin: 0 !important;
            padding: 0 !important;
        }

        .full {
            padding: 0;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .collection {
            padding-top:0px;
        }



        
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {

        .main2 {
            flex-direction: column-reverse;
        }

        .maintext {
            width: 100%;
        }

        .mainimg {
            width: 100%;
        }

        .blogview {
            flex-direction: column;
        }

        .contentview {
            width: 100%;
        }

        .contentview2 {
            width: 100%;
        }

        .divider {
            width: 100%;
            height: 1px;
            margin: 0 0 auto auto;
            border-top: unset;
            border-bottom:1px solid #ffffff;
        }

        ul li {
            font-size: unset !important;
        }

        ul li a {
            font-size: unset !important;
        }

        ul {
            margin-left: -1em !important;
        }

        textarea {
            width: calc(100% - 20px)
        }

        .collection {
            margin-top:40px
        }
    }

    /* Large devices (desktops, less than 1200px) */
    @media (max-width: 1199.98px) {

    }

    /* X-Large devices (large desktops, less than 1400px) */
    @media (max-width: 1399.98px) {

    }
    
</style>