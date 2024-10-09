<main class="body">
    <nav class="nav">
        <div class="logo"></div>
        <div style="display: flex; align-items:baseline; gap:10px">
            <h1 class="text1" style="font-size: 60px;">Kraaftersite</h1>
            <p class="textmc" style="font-size: 20px;">Powered by Indomie! (not sponsored)</p>
        </div>
        <div class="navlayout">
            <a href=placeholder> <p class="text1" style="font-size: 20px">Home</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href=placeholder> <p class="text1" style="font-size: 20px">Blog</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href=placeholder> <p class="text1" style="font-size: 20px">Projects</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href=placeholder> <p class="text1" style="font-size: 20px">Gallery</p></a><p class="text1" style="font-size: 20px">  |  </p>
            <a href=placeholder> <p class="text1" style="font-size: 20px">Links</p></a>
        </div>
    </nav>

    <slot />

</main>

<style>
    @import url('https://fonts.cdnfonts.com/css/minecraft-3');

    :global(html,body) {
        margin:0;
    }

    .body {
        background-color: rgb(31, 31, 31);
    }

    .nav {
        width: 100%-30px;
        height: 100px;
        padding: 10px;
        gap: 10px;
        display: flex;
        align-items: center;
        background: linear-gradient(180deg, rgba(46, 46, 46, 0.8) 0%, rgba(46, 46, 46,0.6) 80%, rgba(46, 46, 46,0.5) 87%, rgba(46, 46, 46,0.35) 94%, rgba(46, 46, 46,0) 100%);
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
        color: rgb(221, 255, 0);
    }
    
    
</style>