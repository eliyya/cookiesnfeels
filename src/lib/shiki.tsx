import { BundledLanguage, bundledLanguages, getHighlighter } from 'shiki/bundle/web';

// import antlers from '../../content/languages/antlers.json';
// import blade from '../../content/languages/blade.json';

export const codeToHtml = async ({ code, language }: {code: string, language: BundledLanguage}) => {

  const highlighter = await getHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: [
      ...Object.keys(bundledLanguages),
    ],
  });

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
  });
};