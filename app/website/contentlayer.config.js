// eslint-disable-next-line import/no-unresolved
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

const Components = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'components/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    publishedAt: { type: 'string', required: false },
    description: { type: 'string', required: false },
    seoDescription: { type: 'string', required: false },
    category: { type: 'string', required: false },
  },
  computedFields,
}));

const Docs = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    publishedAt: { type: 'string', required: false },
    description: { type: 'string', required: false },
    seoDescription: { type: 'string', required: false },
    category: { type: 'string', required: false },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Components, Docs],
});
export default contentLayerConfig;
