import fetch from "isomorphic-unfetch"
import { convert } from "html-to-text"

const WORDPRESS_API_URL =
	process.env.WORDPRESS_API_URL || "https://auburnpulsars.com/wp-json/wp/v2"

export async function getPosts(perPage = 10) {
	const res = await fetch(
		`${WORDPRESS_API_URL}/posts?per_page=${perPage}&_embed`
	)
	const posts = await res.json()
	return posts.map((post) => ({
		id: post.id,
		title: post.title,
		excerpt: post.excerpt,
		date: post.date,
		slug: post.slug,
		jetpackFeaturedMediaUrl: post.jetpack_featured_media_url || null,
	}))
}

export function getExcerpt(excerpt) {
	if (!excerpt || !excerpt.rendered) return ""
	return convert(excerpt.rendered, { wordwrap: false }).trim()
}

export function createMarkup(html) {
	return { __html: html }
}

export function toDateString(date) {
	if (!date) return ""
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})
}

