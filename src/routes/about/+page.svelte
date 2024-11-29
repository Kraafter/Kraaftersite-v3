<script>
    import * as config from '$lib/config'
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Links - {config.title}</title>
    <meta name='description' content='Information about who Kraaft is.'>

    <meta property="og:title" content="About - {config.title}">
    <meta property="og:description" content="Information about who Kraaft is.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text1">⬢ I am...</p>
        <ul>
            <li class="text2">
                <p class="text2 textbigger">A highschool student</p>
                <p class="text2">
                    Right now, I'm only a highschool student graduating next year. As for which school I go to, there's a clue
                    on one of the many splash texts being displayed near my logo. If you are from that school, hmu pls lets be
                    friends.
                </p>
            </li>
            <li class="text2">
                <p class="text2 textbigger">A massive hobbyist</p>
                <p class="text2">
                    Surprise! You've prolly already seen the massive list of hobbies I do on the front page. hobbies are a massive
                    part of my life (obviously since I'm a teenager). 
                </p>
            </li>
            <li class="text2">
                <p class="text2 textbigger">A furry</p>
                <p class="text2">Surprise yet again! I'm still quite a new furry, only having declared myself as one in 2022
                    (although I've been a tad interested prior to that year). As of now I've made two fursonas, which their
                    information can be checked out at my <a class="text2 linking" href="/about/fursona">fursona page</a>.
                </p>
            </li>
            <li class="text2">
                <p class="text2 textbigger">An amateur programmer</p>
                <p class="text2">
                    I've been interested in code, programs, and all things computer for years at this point (computers since 
                    kindergarten while code since elementary). However, I haven't really dug deep into the coding. I've only 
                    started checking out JavaScript and website frameworks in 2024 and it's still a long road ahead of me. 
                    Information about my programming skills and knowledge can be viewed at my
                    <a class="text2 linking" href="/about/code">code page</a>.
                </p>
            </li>
        </ul>
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

    .text1 {
        font-family: monospace;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
    }

    .textbigger {
        font-size: 25px !important;
    }

    .text2 {
        font-family: monospace;
        color: aliceblue;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    .text3 {
        font-family: monospace;
        color: aliceblue;
        font-size: 20px;
        padding: auto;
        text-align: center;
        width: fit-content;
        margin: auto;
        margin-top: 3px;
    }

    .linking {
        background-color: rgba(61, 0, 160, 0.537);
        padding: 0 !important;
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

        .text3 {
            font-size: 15px;
            margin-top: 6px;
        }

        .top {
            margin: 0px 5px;
        }
    }
</style>