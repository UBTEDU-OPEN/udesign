import React from 'react';
import { Demo } from '../../demo';
import { getAllDocs, getDocBySlug } from '../../lib/docs';
import markdownToHtml from '../../lib/markdown';

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

export type DocProps = {
  content: string;
};

export default function Doc({ content }: DocProps) {
  return (
    <>
      <Demo.Doc menus={docMenus}>
        <article className='prose max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: content }} />
      </Demo.Doc>
    </>
  );
}

/**
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do direct database queries.
 * can't use __dirname, use process.cwd() instead
 * https://nextjs.org/docs/api-reference/data-fetching/get-static-props
 */
export async function getStaticProps({ params }: any) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  // props will be passed to the page component as props
  return {
    props: {
      ...doc,
      content,
    },
  };
}

/**
 * If the page name is pages/posts/[postId]/[commentId], then params should contain [postId] and [commentId].
 * https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
 */
export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => ({
      params: {
        slug: doc.slug, // 对应 [slug].js
      },
    })),
    fallback: false,
  };
}
