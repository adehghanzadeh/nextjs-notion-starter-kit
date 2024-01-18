import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1d1c601269684df196132ea315e0bba6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Keep you Eyes on me :)',
  domain: 'life.alerezaa.ir',
  author: 'Alireza',

  // open graph metadata (optional)
  description: 'Track me :)',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'alerezaaa',
  linkedin: 'dehghanzadeh',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@alerezaa', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'favicon-16x16.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  pageUrlOverrides: {
    '/now': '1d1c601269684df196132ea315e0bba6',
    '/now/': '1d1c601269684df196132ea315e0bba6',
    '/live': '360f03e297064ab890ecb87addc32255',
    '/server': '4b550768525c40868275c87abc75923f',
    '/servers': '1abbcfde84f04bba83e0304cc2eff23f'
  },
  
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'servers',
  //     pageId: '4b550768525c40868275c87abc75923f'
  //   }
  // ]
})
