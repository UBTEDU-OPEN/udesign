import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'src/docs');

// export function getDirectories(postsDirectory) {
//   return fs
//     .readdirSync(postsDirectory, { withFileTypes: true })
//     .filter((dir) => dir.isDirectory())
//     .map((dir) => dir.name);
// }

/**
 * get markdown file data by the slug for the page
 * @param {Array} slug [ 'react', 'introduce' ]
 * @returns
 */
export function getDocBySlug(slug) {
  const realSlug = slug.join('/');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Combine the data with the id and content
  return {
    meta: data,
    content,
  };
}

// 'react/introduce.md',
export function getDocByPath(file) {
  const slug = file.replace(/\.md$/, '').split('/'); // ['react', 'introduce']
  return { slug };
}

// https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs/62695186
export function getAllDocs() {
  const walkSync = require('walk-sync');
  const files = walkSync(docsDirectory, { globs: ['**/*.md'] }); // [ 'css-variables.md', 'react/introduce.md', 'spec/introduce.md', 'theme.md' ]
  const docs = files.map((file) => getDocByPath(file));
  return docs;
}

export function findFilesInDir(startPath, filter) {
  var results = [];

  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      results = results.concat(findFilesInDir(filename, filter)); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      console.log('-- found: ', filename);
      results.push(filename);
    }
  }
  return results;
}
