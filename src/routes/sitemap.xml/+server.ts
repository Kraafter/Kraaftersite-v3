// /src/routes/sitemap.xml/+server.ts
import * as sitemap from 'super-sitemap';
import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';

const urlart = 'https://api.imagekit.io/v1/files?path=art';
const urlarch = 'https://api.imagekit.io/v1/files?path=artchive';
const urlphoto = 'https://api.imagekit.io/v1/files?path=photo';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: env.SECRET_IK_KEY // DO NOT PUSH PLAIN API KEY, USE SECRETS
  }
}

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/blog/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {

    const posts = await getPosts()
	const postjs = json(posts)
    const blogjs = await postjs.json()

    const resart = await fetch(urlart, options);
    const resjsart = await resart.json();

    const resarch = await fetch(urlarch, options);
    const resjsarch = await resarch.json();
    
    const resphoto = await fetch(urlphoto, options);
    const resjsphoto = await resphoto.json();

    const postSlugs: string[] = blogjs.map((item: { slug: string; }) => item.slug);
    const photoSlugs: string[] = resjsphoto.map((item: { name: string; }) => item.name);
    const artSlugs: string[] = resjsart.map((item: { name: string; }) => item.name);
    const archSlugs: string[] = resjsarch.map((item: { name: string; }) => item.name);

    return await sitemap.response({
        origin: 'https://kraafter.me',
        excludeRoutePatterns: [
            '^/api.*',
            '/blog/posts'
        ],
        paramValues: {
            '/blog/posts/[slug]': postSlugs,
            '/gallery/archive/[slug]': archSlugs,
            '/gallery/art/[slug]': artSlugs,
            '/gallery/photo/[slug]': photoSlugs,
        }
    });
};