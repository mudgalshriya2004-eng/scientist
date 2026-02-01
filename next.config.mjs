/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "cgu-odisha.ac.in" },
      { protocol: "https", hostname: "rajdhanisamna.com" },
      { protocol: "https", hostname: "i.ytimg.com"},
      { protocol: "https", hostname: "amnromania.ro"},
      { protocol: "https", hostname: "static.wixstatic.com"},
      { protocol: "https", hostname: "mathshistory.st-andrews.ac.uk"},
      { protocol: "https", hostname: "glimpse2u.weebly.com"},
      { protocol: "https", hostname: "scienceindiamag.in"},
      { protocol: "https", hostname: "cdn-images.prepp.in"},
      { protocol: "https", hostname: "blogger.googleusercontent.com"},
    ],
  },
};

export default nextConfig;
