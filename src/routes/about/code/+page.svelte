<script lang="ts">
    import * as config from '$lib/config'
    import { page } from '$app/stores';

</script>

<svelte:head>
    <title>Code - {config.title}</title>
    <meta name='description' content="Information about my code skills.">

    <meta property="og:title" content="Code - {config.title}">
    <meta property="og:description" content="Information about my code skills.">
    <meta property="og:image" content="https://kraafter.me/assets/logo/dark/large.webp">
    <meta property="og:url" content="https://kraafter.me{$page.url.pathname}">
    <meta property="og:type" content="website">
</svelte:head>

<main class="blur full">
    <div class="main">
        <p class="text2"><a class="text2" href="/about">← Back to about</a></p>
        <p class="text1">🔃 Code</p>
        <p class="text2">A small and simple portofolio to show all things coding I'm somewhat familiar with.</p>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
        <ul>
            <li class="text2">
                <p class="text2">The languages I code in.</p>
                <div style="margin-left:20px; margin-right:20px; align-items:start">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="40" alt="cplusplus logo"  />
                </div>
            </li>
            <li class="text2">
                <p class="text2">Web-related document formatting I understand.</p>
                <div style="margin-left:20px; margin-right:20px; align-items:start">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
                </div>
            </li>
            <li class="text2">
                <p class="text2">Frameworks and tools I am familiar with.</p>
                <div style="margin-left:20px; margin-right:20px; align-items:start">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" height="40" alt="svelte logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="40" alt="bootstrap logo"  />

                </div>
            </li>
            <li class="text2">
                <p class="text2">IDEs and code editors I use.</p>
                <div style="margin-left:20px; margin-right:20px; align-items:start">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="vscode logo"  />
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img width="12" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" height="40" alt="pycharm logo"  />
                </div>
            </li>
        </ul>
        
        <hr class="tophr" style="visibility:hidden; border-top: 1px solid aliceblue"><br><br><hr class="tophr" style="visibility:visible; border-top: 2px solid aliceblue"><br>
        <p class="text1">📂 Projects Highlights</p>
        <p class="text2">For all projects, click <a class="text2 linking" href="/projects">here</a>.</p>
        <hr class="tophr" style="visibility:visible; border-top: 1px solid aliceblue">
	    <ul class="posts" style="list-style-type: none; padding-left:0">
            <li class="posts">
                <a href="https://github.com/Kraafter/OCRLink" class="text1 title" target="_blank">Kraafter/OCRLink</a>
                <p class="text2 textlist">A simple project allowing screenshotted links to be opened without inconveniently typing it one by one.</p>
            </li>
            <hr>
            <li class="posts">
                <a href="https://github.com/Kraafter/simpleshortener-svelte" class="text1 title" target="_blank">Kraafter/Simpleshortener-svelte</a>
                <p class="text2 textlist">A simple link shortener implementing a redis kv store and slugs editability.</p>
            </li>
            <hr>
        </ul>
        
    </div>
</main>

<style>
    .tophr {
        width: 100%;
    }

    .posts {
		display: grid;
		gap: 0;
        width: 100%;
	}

    .posts hr {
        visibility: hidden;
        width: 100%;
        border-top: 1px solid aliceblue !important;
        height: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

	.posts hr:not(:last-child) {
        visibility:visible;
        height: 1px !important;
        margin-top: 1rem !important;
        margin-bottom: 1rem  !important;
	}

    .linking {
        background-color: rgba(61, 0, 160, 0.537);
        padding: 0 !important;
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
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.45) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
    }

    .main{
        display:flex;
        flex-direction: column;
    }

    .text1 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 30px;
        padding: 10px;
    }

    .text2 {
        font-family: plus_jakarta_sansregular;
        color: aliceblue;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        .posts hr {
            width: calc(100% - 50px);
            margin-left: 0;
            margin-right: 0;
        }

        .textlist {
            width: calc(100% - 50px);
        }
    }

    @supports (-moz-appearance: none) {
        @media (max-width: 768px) {
            .text1 {
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
    }
</style>