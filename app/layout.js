// app/layout.js (or app/layout.tsx for TypeScript)

import Head from 'next/head';  // Import Head from next/head
import './globals.css'; // Import global styles if you have them

export const metadata = {
  title: 'Coastal Ghostwriting',
  description: 'Coastal Ghostwriting is a leading ghostwriting agency that offers a wide range of writing services, including fiction, non-fiction, and autobiography.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Crisp Chat Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "3e390a67-cbc9-439e-828c-d79e13e1ec49";
              (function() {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
