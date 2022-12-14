import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allComponents, Component } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from '../../components/mdx-components';
import { Demo } from '../../demo';
import { menus } from '../../constants/menus';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allComponents.map((component) => ({
    params: {
      slug: component?.slug.split('/').slice(2),
    },
  }));
  // const paths: string[] = allComponents.map((component) => component.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const component = allComponents.find((component) => component?.slug.endsWith(params?.slug as string)) || null;

  return { props: { component } };
};

type ComponentPageProps = {
  component: Component;
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const ComponentPage = ({ component }: ComponentPageProps) => {
  const MDXContent = useMDXComponent(component?.body.code);

  return (
    <>
      <Demo.Doc base='components' menus={menus}>
        <MDXContent components={mdxComponents} />
      </Demo.Doc>
    </>
  );
};

export default ComponentPage;
