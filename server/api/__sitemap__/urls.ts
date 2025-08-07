import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(() => {
    return [
        { loc: '/', _sitemap: 'pages' },
        { loc: '/about', _sitemap: 'pages' },
        { loc: '/direct', _sitemap: 'pages' },
        { loc: '/vkads', _sitemap: 'pages' },
        { loc: '/tgads', _sitemap: 'pages' },
        { loc: '/website', _sitemap: 'pages' },
        { loc: '/geomarketing', _sitemap: 'pages' },


    ] satisfies SitemapUrlInput[]
})