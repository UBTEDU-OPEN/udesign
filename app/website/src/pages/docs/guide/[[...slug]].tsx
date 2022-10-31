import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allArticles, Article } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from '../../../components/mdx-components';
import { Demo } from '../../../demo';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allArticles.map((article) => ({
    params: {
      slug: article?.slug.split('/').slice(2),
    },
  }));
  // const paths: string[] = allArticles.map((article) => article.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params);
  console.log('allArticles', allArticles);
  // const params = toArray(slug);
  // const _slug = params.join('/');
  const article = allArticles.find((article) => article?.slug.endsWith(params?.slug as string)) || null;

  return { props: { article } };
};

// 通用
const docMenus = [
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

type GuidePageProps = {
  article: Article;
};

const GuidePage = ({ article }: GuidePageProps) => {
  const MDXContent = useMDXComponent(article?.body.code);

  return (
    <>
      <Demo.Doc menus={docMenus}>
        <MDXContent components={mdxComponents} />
      </Demo.Doc>
    </>
  );
};
export default GuidePage;
