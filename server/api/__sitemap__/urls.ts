import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(() => {
    return [
        { loc: 'https://inwy.ru', _sitemap: 'pages' },
        { loc: 'https://inwy.ru/about', _sitemap: 'pages' },
        { loc: 'https://inwy.ru/direct', _sitemap: 'pages' },
        { loc: 'https://inwy.ru/vkads', _sitemap: 'pages' },
        { loc: 'https://inwy.ru/tgads', _sitemap: 'pages' },
        { loc: 'https://inwy.ru/website', _sitemap: 'pages' },
        { loc: 'https://inwy.ru/geomarketing', _sitemap: 'pages' },


    ] satisfies SitemapUrlInput[]
})