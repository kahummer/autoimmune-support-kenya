import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      // Short link for posters, QR codes and WhatsApp. Change the destination
      // here (not on printed material) if registration ever moves.
      {
        source: "/register",
        destination: "/mega-run-and-walk#register",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
