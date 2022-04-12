import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import { Header } from '@/Organisms/Header';
import { Footer } from '@/Organisms/Footer';

export const Layout = ({ children }) => {
  // const { resolvedTheme } = useTheme();

  // useEffect(() => {
  //   //NO FUNCIONA EL FAVICON
  //   const favicon = document.querySelector("link[rel~='icon']");
  //   if (favicon) {
  //     favicon.href = `/assets/favicon_${resolvedTheme}.svg`;
  //   }
  // }, [resolvedTheme]);

  return (
    <div className="flex flex-col justify-start min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
