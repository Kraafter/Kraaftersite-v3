<script>
    export let data
    let name = data.slug
    let url = "https://ik.imagekit.io/kr4ft/photo/" + name
</script>

<div class="main full">
    <p class="text2"><a class="text2" href="/gallery/photo">← Back to photos</a></p>
    <img src="{url}" alt="{data.slug}">
</div>

<style>
    .text2 {
        font-family: monospace;
        color: aliceblue;
        font-size: 20px;
    }

    .main{
        margin: 80px;
        margin-top: 5px;
        background-color: rgba(50,50,50,0);
        background: linear-gradient(90deg, rgba(50,50,50,1) 0%, rgba(50,50,50,1) 1%, rgba(50,50,50,1) 2%, rgba(50,50,50,1) 4%, rgba(50,50,50,1) 5%, rgba(50,50,50,1) 7%, rgba(50,50,50,1) 93%, rgba(50,50,50,1) 95%, rgba(50,50,50,1) 96%, rgba(50,50,50,1) 98%, rgba(50,50,50,1) 99%, rgba(50,50,50,1) 100%);
    }

    .full{
        width: 100%;
        height: fit-content;
        padding: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    img {
        width: 100%;
    }

    /* X-Small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {

    }

    /* Small devices (landscape phones, less than 768px) */
    @media (max-width: 768px) {

        .main {
            margin: 15px;
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
