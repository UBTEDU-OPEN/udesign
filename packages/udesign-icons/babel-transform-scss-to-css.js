module.exports = function() {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value.endsWith('.scss')) {
          path.node.source.value = path.node.source.value.replace(/\.scss$/, '.css');
        }
      },
    },
  };
};
