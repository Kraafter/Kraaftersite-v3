export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}

export type Repo = {
	full_name: string
	html_url: string
	language: Categories[]
	description: string
}
