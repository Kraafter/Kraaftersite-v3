<script>
    import * as config from '$lib/config'
</script>

<svelte:head>
    <title>Links - {config.title}</title>
</svelte:head>

<main class="blur full">
    <div class="main">
        <h1 class="text1" style="font-size:40px">Social links</h1>

        

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

    .main2{
        display:flex;
        flex-direction: row;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
    }
</style>