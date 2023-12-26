/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'yt3.ggpht.com',
                port: '',
            }
        ]
    }
}

