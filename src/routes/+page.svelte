<script>
    import * as config from '$lib/config';
</script>

<svelte:head>
    <title>Home - {config.title}</title>
</svelte:head>

<main class="blur full">
    <div class="main">
        <div class="main2">
            <span style="flex:5; height:fit-content;">
                <h2 class="text1" style="font-size: 40px; margin:0">Hello, Kraafter here</h2>
                <p class="text1" style="font-size: 20px;">I am an Indonesian teenager taking up programming, web development, drumming, localization, videography, photography, and art. I'm currently a localization contributor at Prism Launcher, translating it to my local language.</p>
                <p class="text1" style="font-size: 20px;">You are now viewing the third version to my website. All past versions can be viewed in the <a class="text1" style="font-size: 20px;" href='placeholder'>version archive</a>.</p>
                <p class="text1" style="font-size: 20px;">Here you'll be able to view my blog, my gallery, my contacts, my social links, my projects, or anything I wish to show here really :v</p>
                <a href="placeholder"><p class="text1" style="font-size: 20px;">A bit more about myself</p></a>
            </span>
            <img style="flex: 2;width:400px ;height:300px" alt="Glive the protogen greeting visitors with a beep!" src='/assets/media/site/glivebeep.png' />
        </div>

        <hr style="width: 98%;">

        <div class="main2">
            <span style="flex:3; height:fit-content;">
                <p class="text1" style="font-size: 30px; margin:0">Check out these cool lookin' buttons!</p>
            </span>
            <div style="flex: 6; height:fit-content;">

                <p class="text1" style="font-size: 20px;text-align:right;margin-top:50px">Friends</p>
                <span class="rightside" style="width: fit-content; gap:100px">
                    <a target="_blank" href="https://kraafter.me/"><img src="/assets/media/site/button.png" alt="This site's button"></a>
                    <a target="_blank" href="https://ryj.my.id/"><img src="https://777vipfurrygacor.games/88x31.gif" alt="ryj.my.id button"></a>
                    <a target="_blank" href="https://mefinity.eu.org/"><img src="https://mefinity.eu.org/badge.png" alt="mefinity.eu.org button"></a>
                    <a target="_blank" href="https://niko.pages.gay"><img alt="niko.pages.gay button" src="https://niko.pages.gay/assets/images/button.png"></a>
                    <a target="_blank" href="https://daringcuteseal.github.io/"><img width="88px" height="31px" src="https://daringcuteseal.github.io/assets/image/button.png" alt="daringcuteseal.github.io button"></a>
                </span>

                <br>

                <p class="text1" style="font-size: 20px;text-align:right;margin-top:50px">Collection</p>
                <span class="rightside" style="width: fit-content; gap:100px">
                    <a href="/"><img src="https://cyber.dabamos.de/88x31/88x31.gif" alt="88x31"></a>
                    <a target="_blank" href="https://nekoweb.org/"><img alt="Nekoweb.org button" src="https://nekoweb.org/assets/buttons/button5.gif"></a>
                    <a target="_blank" href="https://beeps.website"><img src="https://beeps.website/assets/images/88x31-d.gif" alt="Beeps.website button | Dark blue and green animated button with Ash the amphimorpho" title="Dark blue and green animated button with Ash the amphimorpho" width="88" height="31" loading="lazy"></a>
                </span>
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
        background-color: rgba(80,80,80,0);
        background: linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(80,80,80,1) 1%, rgba(80,80,80,1) 2%, rgba(80,80,80,1) 4%, rgba(80,80,80,1) 5%, rgba(80,80,80,1) 7%, rgba(80,80,80,1) 93%, rgba(80,80,80,1) 95%, rgba(80,80,80,1) 96%, rgba(80,80,80,1) 98%, rgba(80,80,80,1) 99%, rgba(80,80,80,1) 100%);
        display:flex;
        flex-direction: column;
    }

    .main2{
        display:flex;
        flex-direction: row;
        padding: 20px;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
    }

    .rightside {
        float:right;
        text-align: right;
    }
</style>