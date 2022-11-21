import React from 'react';
import Head from 'next/head';
import { SITE_DESCRIPTION, SITE_NAME } from '../../constants/site';

export type MetaProps = {
  title?: string; // 页面标题
  description?: string; // 页面描述
};

export default function Meta(props: MetaProps) {
  const { title = SITE_NAME, description = SITE_DESCRIPTION } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=1024, initial-scale=1' />
      <meta charSet='utf-8' />
      {/* <meta name='theme-color' content='#000' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' /> */}
    </Head>
  );
}
