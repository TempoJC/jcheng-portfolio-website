import { AnimatePresence } from 'framer-motion';
import { Layout } from '@/Templates/Layout';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
