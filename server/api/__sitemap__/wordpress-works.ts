// server/api/__sitemap__/wordpress.ts
import { defineSitemapEventHandler } from '#imports'

interface WPPost {
    slug: string
    modified: string
}

export default defineSitemapEventHandler(async () => {
    const posts: WPPost[] = await $fetch('http://ichinyfd.beget.tech/wp-json/wp/v2/my-works?per_page=100')

    return posts.map((post) => ({
        loc: `/website/${post.slug}`,       // локальный маршрут
        lastmod: post.modified,                // дата последнего изменения
        changefreq: 'weekly',
        priority: 0.7
    }))
})