import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import apolloClient from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ApolloProvider client={apolloClient}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  ) 
}

export default MyApp
