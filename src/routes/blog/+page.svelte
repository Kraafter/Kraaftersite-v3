<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Blog - {config.title}</title>
</svelte:head>

<!-- Posts -->
<section class="main blur full">
	<ul class="posts" style="list-style-type: none; padding-left:0">
		{#each data.posts as post}
			<li class="post">
				<a href=/blog/posts/{post.slug} class="title text1">{post.title}</a>
				<p class="date text2">{formatDate(post.date)}</p>
				<p class="description text2">{post.description}</p>
			</li>
            <hr>
		{/each}
	</ul>
    <a style="margin-top: auto;" href='/blog/rss.xml'><p class='text2'>RSS</p></a>
</section>

<style>
	.posts {
		display: grid;
		gap: 0;
	}

    .posts hr {
        visibility: hidden;
        width: 100%;
        border-top: 1px solid aliceblue !important;
        height: 1px !important;
    }

	.posts hr:not(:last-child) {
        visibility: unset;
	}

	.title {
		text-transform: capitalize;
	}

    .date {
        margin: 0 0 8px;
    }


    .blur{
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .full{
        width: 100%;
        min-height: 600px;
        height: fit-content;
        padding: 30px;
        padding-top: 5px;
    }

    .main{
        margin: 100px;
        margin-top: 5px;
        background: linear-gradient(90deg, rgba(50,50,50,0) 0%, rgba(50,50,50,0.31) 1%, rgba(50,50,50,0.4542836421678046) 2%, rgba(50,50,50,0.54) 4%, rgba(50,50,50,0.59) 5%, rgba(50,50,50,0.6) 7%, rgba(50,50,50,0.6) 93%, rgba(50,50,50,0.59) 95%, rgba(50,50,50,0.54) 96%, rgba(50,50,50,0.45) 98%, rgba(50,50,50,0.31) 99%, rgba(50,50,50,0) 100%);
        display:flex;
        flex-direction: column;
    }

    .text1 {
        font-family: monospace;
        color: aliceblue;
        font-size: 30px;
    }

    .text2 {
        font-family: monospace;
        color: aliceblue;
        font-size: 20px;
    }


        /* X-Small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {

        }

        /* Small devices (landscape phones, less than 768px) */
        @media (max-width: 768px) {

            .main {
                margin: 20px;
            }

            .text1 {
                font-size: 25px;
            }

            .text2 {
                font-size: 15px;
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
</style>
