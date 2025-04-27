<script lang="ts">
    import * as config from '$lib/config'
    import { page } from '$app/stores';

</script>

<svelte:head>
    <title>Wares - {config.title}</title>
    <meta name='description' content="Information about what Wares I use daily.">

    <meta property="og:title" content="Wares - {config.title}">
    <meta property="og:description" content="Information about what Wares I use daily.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main id="main" class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <h1>🛠️ Wares</h1>
        <p class="text2">Information about what Wares I use daily.</p>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
        
        <div class="sidebyside">
            <div class="sideleft">
                <p class="textm">Content</p>
                <ol>
                    <li class="texttoc"><a class="texttoc linking" href="#hardware">Hardware</a></li>
                    <li class="texttoc"><a class="texttoc linking" href="#software">Software</a></li>
                </ol>
            </div>
            <div class="sideright">
                <p class="text2">
                    I use a set of software and hardware to go though my daily life and work.
                </p>
                <p class="text2">
                    This page is dedicated to list out my wares and their specifications.
                </p>
                <h2 id="hardware">Hardware</h2>
                <img class="text2" src='https://ik.imagekit.io/kr4ft/blogmedia/wares/frontpage.png' alt="My desk setup, containing a laptop, a mouse, a keyboard, and others" width="100%">
                <p class="textcaption">my setup</p>
                <ul>
                    <li class="text2">
                        <p class="text2">Primary Laptop: Acer Nitro V 15 (ANV15-51)</p>
                        <p class="text2">CPU: Intel Core i9-13900H</p>
                        <p class="text2">GPU: NVIDIA GeForce RTX 4060</p>
                        <p class="text2">RAM: 16GB DDR5</p>
                        <p class="text2">Storage: 512GB NVMe SSD</p>
                    </li>
                    <li class="text2">
                        <p class="text2">Second Laptop: Asus Vivobook S200E (X202E)</p>
                        <p class="text2">CPU: Intel Core i3-3217U</p>
                        <p class="text2">GPU: Intel HD Graphics 4000</p>
                        <p class="text2">RAM: 4GB DDR3</p>
                        <p class="text2">Storage: 500GB HDD</p>
                    </li>
                    <li class="text2">
                        <p class="text2">Keyboard</p>
                        <p class="text2">Barebone: CIY Tester68</p>
                        <p class="text2">Switches: Gateron Yellow</p>
                        <p class="text2">Keycaps: PBT Keycaps</p>
                    <li class="text2">
                        <p class="text2">Mouse: Ezren M133 <a href="https://www.tokopedia.com/ezren/ezren-m133-mouse-nirkabel-2-4g-bluetooth-5-1-transparan-silent-abu-abu" class="text2 linking">[Tokopedia]</a></p>
                        <p class="text2">I don't recommend this mouse</p>
                        <p class="text2">Planning on getting a PressPlay Nova V4 <a href="https://www.tokopedia.com/pressplay/nova-v4-lightweight-wireless-gaming-mouse-white-charging-dock-c34e5" class="text2 linking">[Tokopedia]</a></p>
                    </li>
                    <li class="text2">
                        <p class="text2">Phone: Vivo V29</p>
                        <p class="text2">CPU: Qualcomm Snapdragon 778G</p>
                        <p class="text2">RAM: 8GB</p>
                        <p class="text2">Storage: 256GB</p>
                    </li>
                    <li class="text2">
                        <p class="text2">Tablet: Samsung Galaxy Tab S4</p>
                        <p class="text2">CPU: Qualcomm Snapdragon 835</p>
                        <p class="text2">RAM: 4GB</p>
                        <p class="text2">Storage: 64GB</p>
                    </li>
                </ul>
                <h2 id="software">Software</h2>
                <ul>
                    <li class="text2">
                        <p class="text2">Operating System: Windows 10 Home Single Language / Arch Linux (btw)</p>
                    </li>
                    <li class="text2">
                        <p class="text2">Browser: Zen Browser</p>
                    </li>
                    <li class="text2">
                        <p class="text2">Text Editor: Visual Studio Code</p>
                    </li>
                    <li class="text2">
                        <p class="text2">Terminal: Windows Terminal / Kitty</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>

<style>
    tr{
        border-bottom: 1px solid #f0f8ffaf;
    }

    tr:last-child{
        border-bottom: none;
    }

    tr:first-child{
        border-bottom: 4px solid #f0f8ffaf;
    }

    .quote {
        padding: 10px;
        border-radius: 5px;
        width: fit-content;
        border-left: 15px solid #18b4a4;
        border-radius: 5px;
        margin-left: 20px;
        background-color: #323232;
    }

    .color-circle {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #000;
        margin-right: 8px;
        vertical-align: middle;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .articleimg1 {
        width: 500px;
    }

    .articleimg2 {
        width: 200px;
    }

    .articleimg3 {
        width: 125px;
    }

    .sidebyside {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
    }

    .sideleft {
        width: 500px;
        height: fit-content;
        background: rgba(78, 78, 78, 0.6);
        border-radius: 5px;
    }

    .sideright {
        width: calc(100% - 25px);
        height: fit-content;
        margin-left: 15px;
    }

    .tophr {
        width: 100%;
    }

    .linking {
        color: #1CE9D4 !important;
        padding: 0 !important;
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
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50, 50, 50, 0.31) 1%, rgba(50,50,50,0.45) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
    }

    .main{
        display:flex;
        flex-direction: column;
    }

    h1 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
        font-weight: 700;
    }

    h2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
        margin-top: 50px;
        font-weight: 600;
    }

    .textm {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 25px;
        padding: 10px;
        margin-bottom: 0;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    .texttoc{
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 20px;
        padding: 0;
        margin-left: 10px;
    }

    .texthead {
        margin-top: 50px;
    }
    

    .textcaption {
        font-family: plus_jakarta_sansregular;
        color: #f0f8ff;
        font-size: 17px;
        padding: 10px;
        margin-bottom: 0;
        margin-top: 0;
        border-bottom: #f0f8ff 1px solid;
        width: calc(100% - 20px);
        padding: 0;
        padding-left: 3px;
        margin-left: 10px;
    }

    @media (max-width: 768px) {
        .texttoc {
            font-size: 15px;
        }
    }

    @supports (-moz-appearance: none) {
        @media (max-width: 768px) {
            h1 {
                width: 100% !important;
            }

            h2 {
                width: 100% !important;
            }

            .text2 {
                width: 100% !important;
            }

            .textlist {
                width: 100% !important;
            }

            .posts hr {
                width: 100%;
            }
        }
    }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) {

        .full {
            padding: 0px;
            margin: 5px;
            background: transparent;
        }

        h1 {
            font-size: 25px;
            padding-bottom: 0px;
        }

        h2 {
            font-size: 20px;
            padding-top: 0px;
            margin-top: 20px;
        }

        .textm {
            font-size: 20px;
        }

        .text2 {
            font-size: 15px;
            padding-top: 0px;
        }

        .textcaption {
            font-size: 15px;
        }

        .sidebyside {
            flex-direction: column;
        }

        .sideleft {
            width: 100%;
            margin-bottom: 30px;
        }

        .sideleft .texttoc {
            font-size: 19px;
        }

        .sideright {
            margin-left: 0;
            width: 100%;
        }
    }
</style>