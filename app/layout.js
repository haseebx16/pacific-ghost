"use client";

import { useEffect } from 'react'; 
import './globals.css';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import PageTransition from './Components/PageTransition';
import Script from 'next/script';

export default function RootLayout({ children }) {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/67c739f15a4588190fb4fbaa/1ilh3km88";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isAnimating, setIsAnimating] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setIsAnimating(true);
    }
  }, [pathname]);

  const isHomePage = pathname === '/';

  

  return (
    <html lang="en">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17041210181">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'AW-17041210181');
</script>
      </head>
      <body>
      <AnimatePresence exitBeforeEnter>
            {isAnimating && !isHomePage && (
              <PageTransition key={pathname} onAnimationComplete={() => setIsAnimating(false)} />
            )}
            <div
              style={{
                position: isHomePage ? 'relative' : 'initial',
                zIndex: isHomePage ? 'auto' : 10,
              }}
              id="main-container"
              className="overflow-hidden"
            >
          {children}
        </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
