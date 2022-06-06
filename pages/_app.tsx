import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import apolloClient from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </UserProvider>
  ) 
}

export default MyApp
