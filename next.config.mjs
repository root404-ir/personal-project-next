/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '/fulkbl2s1yqz/6CvnR1qxJ9DP6dwRusbc4L/0af9b8d69e1113fe4767defc1148d443/lodash.png'
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '/fulkbl2s1yqz/1aY55G2mHkbRAvQhrLBDEo/98f740c34083024ef3c04217686296e5/env-variables-in-nodejs.png'
            }
        ]
    }
};

export default nextConfig;
