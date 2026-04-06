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
        hostname: "fast.wistia.com",
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
            value: [
              "default-src 'self';",
              // Allow Wistia scripts
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fast.wistia.com https://*.wistia.com;",
              // Allow Google Fonts and Wistia CSS
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fast.wistia.com;",
              // Allow the actual font files
              "font-src 'self' data: https://fonts.gstatic.com;",
              // Allow Wistia video data and analytics
              "connect-src 'self' https://fast.wistia.com https://*.wistia.com wss://distillery.wistia.com;",
              // Allow Wistia images/thumbnails
              "img-src 'self' blob: data: https://fast.wistia.com https://*.wistia.com;",
              // Allow Wistia video frames
              "frame-src 'self' https://fast.wistia.net https://fast.wistia.com;",
              "worker-src 'self' blob:;"
            ].join(' '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
