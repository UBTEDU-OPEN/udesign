import React from 'react';
import classNames from 'classnames';
import BaseHighlight, { Language, PrismTheme, defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

export type HighlightProps = {
  code: string;
  language: Language;
  theme?: PrismTheme;
};

export const Highlight = ({ code, language, theme = nightOwl }: HighlightProps) => (
  <BaseHighlight {...defaultProps} code={code} language={language} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => {
      const cls = classNames('p-5 text-sm', className);
      return (
        <pre className={cls} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      );
    }}
  </BaseHighlight>
);
