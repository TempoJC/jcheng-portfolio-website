import Head from 'next/head';
import PropTypes from 'prop-types';

const SeoHead = ({ title, description, author = 'TempoJC' }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://tempoJC.com/" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:creator" content={author} />

    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

SeoHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string
};

export { SeoHead };
