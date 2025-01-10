/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'cdn.sanity.io',
                port : '',
                pathname : '/**'
            }
        ],
    },
    reactStrictMode : false
};

export default nextConfig;
