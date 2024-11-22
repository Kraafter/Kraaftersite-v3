<script>
    import * as config from '$lib/config';
    export let data
    import { formatDate } from '$lib/utils'
</script>

<svelte:head>
    <title>Home - {config.title}</title>
</svelte:head>

<main class="blur full">
    <div class="main">
        <div class="main2">
            <div class="maintext">
                <span style="height:fit-content;">
                    <h2 class="text1" style="margin:0">Hello, Kraafter here 👋</h2>
                    <p class="text2">I am an Indonesian teenager interested in programming, web development, drumming, localisation, videography, photography, and art. I'm currently a high school student and a localisation contributor at <a target="_blank" class="text2 linking" href="https://prismlauncher.org/">Prism Launcher</a></p>
                    <p class="text2">You are now viewing the third version to my website. All past versions can be viewed in the <a class="text2 linking" href='/sitever'>version archive</a>.</p>
                    <p class="text2">Here you'll be able to view my blog, my gallery, my contacts, my social links, my projects, or anything I wish to show here really :v</p>
                    <p class="text2"><a class="text2 linking" href="placeholder">A bit more about myself</a></p>
                </span>
            </div>
            <div class="mainimg">
                <img class="gliveimg" alt="Glive the protogen greeting visitors with a beep!" src='/assets/media/site/glivebeep.webp' />
                <p class="text2" style="width: 100%; text-align:center;">Glive, the protogen</p>
            </div>
        </div>

        <hr style="width: 98%;">

        <div class="main3">
            <div class="">
                <span style="height:fit-content; width:33%">
                    <p class="text1 header2" style="margin:0">🔘 Check out these cool lookin' buttons!</p>
                </span>
            </div>
            <div class="main2">
                <div class="mainimg">
                    <img class="gliveimg" alt="Nord the amphimorpho with an 88x31 button in his mouth" src='/assets/media/site/nordfloat.webp' />
                    <p class="text2" style="width: 100%; text-align:center;">Nord, the amphimorpho</p>
                </div>
                <div class="maintext">

                    <p class="text2" style="text-align:right;margin-top:50px">Friends</p>
                    <span class="rightside" style="width: fit-content; gap:100px">
                        <a href="https://ryj.my.id/"><img src="https://777vipfurrygacor.games/88x31.gif" alt="ryj.my.id button" title="ryu"></a>
                        <a href="https://finiteti.me/"><img src="https://finiteti.me/badge.png" alt="finiteti.me button" title="mefinity"></a>
                        <a href="https://daringcuteseal.github.io/"><img width="88px" height="31px" src="https://daringcuteseal.github.io/assets/image/button.png" alt="daringcuteseal.github.io button" title="daringcuteseal"></a>
                        <a href="https://milkyway.moe/"><img alt="milkyway.moe button" title="milkyway" src="https://milkyway.moe/milkybuttons/milkybtn.gif"></a>
                    </span>

                    <br>

                    <p class="text2" style="text-align:right;margin-top:50px">Collection</p>
                    <span class="rightside" style="width: fit-content; gap:100px">
                        <img src="https://cyber.dabamos.de/88x31/88x31.gif" alt="88x31" title="88x31">
                        <a href="https://nekoweb.org/"><img alt="Nekoweb.org button" src="https://nekoweb.org/assets/buttons/button5.gif" title="The webhost for cats!"></a>
                        <a href="https://beeps.website"><img src="https://beeps.website/assets/images/88x31-d.gif" alt="Beeps.website button | Dark blue and green animated button with Ash the amphimorpho" title="Dark blue and green animated button with Ash the amphimorpho" width="88" height="31" loading="lazy"></a>
                        <a href="https://tuxedodragon.art"><img alt="tuxedodragon button" title="tuxedodragon" src="https://tuxedodragon.art/tuxedodragon 88x31.gif">
                        <a href="https://neo-neighborhoods.neocities.org/TimesSquare/"><img src="https://neo-neighborhoods.neocities.org/TimesSquare/times88.gif" width="88" height="31" title="neocities times square" alt="neocities times square button"></a>
                        <a href="https://dokode.moe/"><img src="https://dokode.moe/media/88x31sites/dokodemobutton3.gif" title="Dokodemo" alt="dokode.moe button"></a>
                    </span>

                    <br>

                    <p class=text2 style="text-align: right; margin-top:50px">Add my button to your site</p>
                    <p class=text2 style="text-align: right; margin-left:auto"><a href="https://kraafter.me/"><img src="/assets/img/button.png" alt="Kraafter.me button" title="kraaftersite"></a><br><br><textarea style="margin-left: auto;" cols="30" disabled><a href="https://kraafter.me/"><img src="https://kraafter.me/assets/img/button.png" alt="Kraafter.me button" title="kraaftersite"></a></textarea></p>
                </div>
            </div>
        </div>
        <hr style="width: 98%;">
        <div class=main3>
            <p class="text1 header2">💬 Recent blog posts</p>
            <div class="blogview">
                {#each data.posts.slice(0,3) as post}
                    <div class="contentview">
                        <a href=/blog/posts/{post.slug} class="text2">{post.title}</a>
                        <p class="text2">{formatDate(post.date)}</p>
                        <p class="text2">{post.description}</p>
                    </div>
                    <div class=divider></div>
                {/each}
            </div>
        </div>
        <hr style="width: 98%;">
        <div class="main3" style="width: 100%;">
            <p class="text1 header2">💍 Webrings</p>
            <div class="blogview">
                <div class="contentview2">
                    <img alt="Rhenerds logo in the style of charli_xcx brat" class="gliveimg" style="height: 170px;" src="/assets/media/site/rhenerds.webp">
                    <p class="text2" style="text-align:center">
                        <a class="text2" href="https://rhendraring.netlify.app/kraaft/previous">&lt;&lt;</a>
                        <a class="text2" href="https://rhendraring.netlify.app/">Rhenerds Webring (in progress)</a>
                        <a class="text2" href="https://rhendraring.netlify.app/kraaft/next">&gt;&gt;</a>
                    </p>
                </div>
                <div class=divider style="margin:0"></div>
                <div class="contentview2">
                    <img alt="A blue-lightgrey amphimorpho with a bright smile" class="gliveimg" style="height: 170px;" src="/assets/media/site/kraaftnoodletr.webp">
                    <p class="text2" style="text-align:center">
                        <a class="text2" href="hhttps://noodle-r.ing/kraaft/prev">&lt;&lt;</a>
                        <a class="text2" href="https://noodle-r.ing/">Amphimorpho Webring</a>
                        <a class="text2" href="https://noodle-r.ing/kraaft/next">&gt;&gt;</a>
                    </p>
                </div>
            </div>
        </div>
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
        width: 60%;
        height: fit-content;
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
        font-family: monospace;
        color: aliceblue;
        font-size: 40px;
    }

    .text2 {
        font-family: monospace;
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
        background-color: rgba(61, 0, 160, 0.537);
    }


    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

    /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

        .main {
            margin: 0;
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
    }

    /* Large devices (desktops, less than 1200px) */
    @media (max-width: 1199.98px) {

    }

    /* X-Large devices (large desktops, less than 1400px) */
    @media (max-width: 1399.98px) {

    }
    
</style>