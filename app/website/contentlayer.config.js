// eslint-disable-next-line import/no-unresolved
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields = {
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: 'guide/*.mdx',
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
  contentDirPath: 'docs',
  documentTypes: [Article],
});
export default contentLayerConfig;
