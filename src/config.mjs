export const SITE = {
	name: "Ensologic Commerce",

	origin: 'https://edden.app',
	basePathname: '/',
	trailingSlash: false,

	title: "Ensologic Commerce: Your gateway to World",
	description: "Connect with global suppliers, and easily manage cross-border shipping and payment. Join Ensologic Commerce today and get access to new international markets!",

	//googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	//googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: true,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: true,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: true,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: true,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
