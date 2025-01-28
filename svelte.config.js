import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 kit: {
  paths: {
   base: process.env.NODE_ENV === 'production' ? '' : '',
   relative: false
  },
  adapter: adapter({
   pages: 'build',
   assets: 'build',
   fallback: 'index.html'
  })/*,
  prerender: {
   entries: ['*']
  }*/
 }
};

export default config;
