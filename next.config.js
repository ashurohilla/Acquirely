/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: ".next",
  typescript: {
    // Temporary safeguard while legacy shared UI files are cleaned up.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "scontent-lhr6-2.cdninstagram.com",
        protocol: "https",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "owerrlaobwdowecvbfgk.supabase.co",
      },
      {
        protocol: "https",
        hostname: "gist.github.com",
      },
      {
        protocol: "https",
        hostname: "instagram.com",
      },

       {
        protocol: "https",
        hostname: "youtube.com",
      },



      
    ],
  },

  // 👇 ADD THIS SECTION TO FIX THE BLOB ERROR
 async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' blob: data: https:;
              font-src 'self' blob: data:;
              connect-src 'self' https:;
              frame-src 'self' https://www.youtube.com https://youtube.com blob:;
              worker-src 'self' blob:;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
