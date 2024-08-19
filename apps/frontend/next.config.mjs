/** @type {import('next').NextConfig} */
const nextConfig = {
    // async redirects() {
    //     return [
    //       // Basic redirect
    //       {
    //         source: '/about',
    //         destination: '/',
    //         permanent: true,
    //       },
    //       // Wildcard path matching
    //       {
    //         source: '/blog/:slug',
    //         destination: '/news/:slug',
    //         permanent: true,
    //       },
    //     ]
    //   },
    images: {
        remotePatterns: [
            {
                hostname: 'pizzariaestrela.cardapiopronto.com.br'
            },
            {
                hostname: 'i.pinimg.com'
            }
        ]
    }
};

export default nextConfig;
