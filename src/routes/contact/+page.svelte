<script>
    import * as config from '$lib/config';
</script>

<svelte:head>
    <title>Contacts - {config.title}</title>
</svelte:head>

<main class="blur full">
    <p class="text1">🔊 Contact Me</p>
    <p class="text2">There are multiple ways to contact me. However, I encourage you to use each communication channel according to their defined usage.</p>
    <p class="text2">For business related inquiries, you may contact me through my work email at <a class="text2 linking" href="mailto:&#098;&#117;&#115;&#105;&#110;&#101;&#115;&#115;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;">&#098;&#117;&#115;&#105;&#110;&#101;&#115;&#115;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;</a></p>
    <p class="text2">For casual or less important inquiries, you may contact me through either my general usage email <a class="text2 linking" href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;">&#104;&#101;&#108;&#108;&#111;&#064;&#107;&#114;&#097;&#097;&#102;&#116;&#101;&#114;&#046;&#109;&#101;</a>, my Discord at @kraaft, or <a class="text2 linking" target="_blank" href="https://furry.engineer/@kraafter">Mastodon</a>.You may also contact through messaging functions available in some services at <a class="text2 linking" href="/link">my social links</a>.</p>
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
        font-family: monospace;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
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
        padding: 0;
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
            margin: 5px;
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