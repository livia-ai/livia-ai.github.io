import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		target: 'body'
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
    mdsvex({
      extensions: ['.md'],
			layout: {
        blog: 'src/routes/blog/_post.svelte'
      }
    })
  ]
};

export default config;
