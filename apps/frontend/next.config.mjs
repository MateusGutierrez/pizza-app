/** @type {import('next').NextConfig} */
const nextConfig = {
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
