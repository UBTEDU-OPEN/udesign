import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allDocs, Doc } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from '../../components/mdx-components';
import { Demo } from '../../demo';

export const menu = [
  {
    name: 'changelog',
    text: '更新日志',
  },
  {
    name: 'quick-start',
    text: '快速上手',
  },
  {
    name: 'css-variables',
    text: 'CSS 变量',
  },
  {
    name: 'theme',
    text: '主题',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allDocs.map((doc) => ({
    params: {
      slug: doc?.slug.split('/').slice(2),
    },
  }));
  // const paths: string[] = allDocs.map((doc) => doc.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc = allDocs.find((doc) => doc?.slug.endsWith(params?.slug as string)) || null;

  return { props: { doc } };
};

type DocPageProps = {
  doc: Doc;
};

const DocPage = ({ doc }: DocPageProps) => {
  const MDXContent = useMDXComponent(doc?.body.code);

  return (
    <>
      <Demo.Doc base='docs' menus={menu}>
        <MDXContent components={mdxComponents} />
      </Demo.Doc>
    </>
  );
};
export default DocPage;
