/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com'],

    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/ja',
            },
        ];
    },
}

export default nextConfig;