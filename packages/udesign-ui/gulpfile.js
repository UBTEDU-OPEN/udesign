const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');
const through = require('through2');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const tsconfig = require('./tsconfig.json');

function clean() {
  return del('./dist/**');
}

function buildStyle() {
  return gulp
    .src(['./src/**/*.scss'], {
      base: './src/',
      ignore: ['**/layouts/**/*', '**/pages/**/*', '**/demo/**/*', '**/lib/**/*'],
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/es'))
    .pipe(gulp.dest('./dist/cjs'));
}

function copyAssets() {
  return gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets')).pipe(gulp.dest('dist/es/assets')).pipe(gulp.dest('dist/cjs/assets'));
}

function buildCJS() {
  return gulp
    .src(['dist/es/**/*.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      }),
    )
    .pipe(gulp.dest('dist/cjs/'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/layouts/**/*', '**/pages/**/*', '**/demo/**/*', '**/lib/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('dist/es/'));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
    // isolatedModules: false,
    // noEmit: false,
    // incremental: true,
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/layouts/**/*', '**/pages/**/*', '**/demo/**/*', '**/lib/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('dist/es/'))
    .pipe(gulp.dest('dist/cjs/'));
}

function copyMetaFiles() {
  return gulp.src(['./README.md']).pipe(gulp.dest('./dist/'));
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        delete parsed.private; // 为了避免主仓库被错误发布，添加了private:true，这里删除。
        const overrideConfig = {
          main: './cjs/index.js',
          module: './es/index.js',
          typings: './es/index.d.ts',
          unpkg: './umd/udesign.js',
        };
        const newParsed = { ...parsed, ...overrideConfig };
        const stringified = JSON.stringify(newParsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      }),
    )
    .pipe(gulp.dest('./dist/'));
}

function umdWebpack() {
  return gulp
    .src('dist/es/index.js')
    .pipe(
      webpackStream(
        {
          output: {
            filename: 'udesign.js',
            library: {
              type: 'umd',
              name: 'udesign',
            },
          },
          mode: 'production',
          optimization: {
            usedExports: true,
          },
          resolve: {
            extensions: ['.js', '.json'],
          },
          module: {
            rules: [
              {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                type: 'asset/inline',
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
          externals: [
            {
              react: 'React',
            },
          ],
        },
        webpack,
      ),
    )
    .pipe(gulp.dest('dist/umd/'));
}

exports.umdWebpack = umdWebpack;

exports.default = gulp.series(
  clean,
  buildES,
  gulp.parallel(buildCJS, buildDeclaration, buildStyle),
  copyAssets,
  copyMetaFiles,
  generatePackageJSON,
  // gulp.parallel(umdWebpack)
);
