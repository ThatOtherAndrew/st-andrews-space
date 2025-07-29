import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'
import sitemap from '@astrojs/sitemap';
import remarkAlert from 'remark-github-blockquote-alert'

// https://astro.build/config
export default defineConfig({
  site: 'https://st-andrews.space',
  integrations: [mdx(), svelte(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    remarkPlugins: [remarkGfm, remarkSmartypants, remarkAlert],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },
})
