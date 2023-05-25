import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import Calendar from '../components/calendar';

export default function Home() {
  const events: any[] = [
    { title: 'Událost 1', date: new Date() },
    { title: 'Událost 2', date: new Date() },
    // další události
  ];
  

  return (
    <Layout>
      <Head>
        <title>My page title</title>
      </Head>
      <Calendar events={events} />
    </Layout>
  );
}



    