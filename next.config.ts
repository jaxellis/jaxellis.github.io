/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	basePath: isProd ? '' : '',
	assetPrefix: isProd ? '/jaxellis.github.io/' : '',
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	output: 'export', // For static export
};

module.exports = nextConfig;
