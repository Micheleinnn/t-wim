import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Calendar from '../components/calendar';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>My page title</title>
      </Head>
      <section>
        <Calendar />
      </section>
    </Layout>
  );
}



