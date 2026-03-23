export type Locale = 'zh' | 'en';

export async function loadStrings(locale: Locale) {
  const strings = locale === 'zh'
    ? await import('../content/strings.zh.json')
    : await import('../content/strings.en.json');
  const s = strings.default ?? strings;

  const base = import.meta.env.BASE_URL;
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;

  // Fix language toggle href to include base path
  const nav = {
    ...s.nav,
    langToggleHref: `${baseWithSlash}${s.nav.langToggleHref.replace(/^\//, '')}`,
  };

  return { ...s, nav };
}

/** Build a locale-aware path with the base URL prefix */
export function localePath(locale: Locale, path: string): string {
  const base = import.meta.env.BASE_URL;
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\//, '');
  return `${baseWithSlash}${locale}/${cleanPath}`;
}

/** Derive the language toggle href from the current page URL */
export function langToggleHref(currentPath: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL;
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  const otherLocale = locale === 'zh' ? 'en' : 'zh';

  // Strip base prefix to get the locale-relative path (e.g., /zh/about/)
  const withoutBase = currentPath.startsWith(base)
    ? currentPath.slice(base.length)
    : currentPath;
  // Replace /zh/ with /en/ or vice versa
  const otherPath = withoutBase.replace(`/${locale}/`, `/${otherLocale}/`).replace(/^\//, '');
  return `${baseWithSlash}${otherPath}`;
}
