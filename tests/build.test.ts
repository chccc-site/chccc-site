import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import { existsSync, readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const distDir = join(__dirname, '..', 'dist');

describe('Build output', () => {
  it('build succeeds without errors', () => {
    // Build should have already been run; check dist exists
    expect(existsSync(distDir)).toBe(true);
  });

  const expectedPages = [
    'en/index.html',
    'zh/index.html',
    'en/about/index.html',
    'zh/about/index.html',
    'en/sermons/index.html',
    'zh/sermons/index.html',
    'en/news/index.html',
    'zh/news/index.html',
    'en/giving/index.html',
    'zh/giving/index.html',
    'en/contact/index.html',
    'zh/contact/index.html',
    'en/news/sample-announcement/index.html',
    'zh/news/sample-announcement/index.html',
    '404.html',
    'index.html',
  ];

  expectedPages.forEach((page) => {
    it(`generates ${page}`, () => {
      expect(existsSync(join(distDir, page))).toBe(true);
    });
  });
});

describe('Page content', () => {
  it('zh homepage has correct lang attribute', () => {
    const html = readFileSync(join(distDir, 'zh/index.html'), 'utf-8');
    expect(html).toContain('lang="zh-Hant"');
  });

  it('en homepage has correct lang attribute', () => {
    const html = readFileSync(join(distDir, 'en/index.html'), 'utf-8');
    expect(html).toContain('lang="en"');
  });

  it('nav contains page links on about page', () => {
    const html = readFileSync(join(distDir, 'en/about/index.html'), 'utf-8');
    expect(html).toContain('/chccc-site/en/sermons');
    expect(html).toContain('/chccc-site/en/news');
    expect(html).toContain('/chccc-site/en/giving');
    expect(html).toContain('/chccc-site/en/contact');
  });

  it('language toggle links to opposite locale', () => {
    const zhHtml = readFileSync(join(distDir, 'zh/about/index.html'), 'utf-8');
    expect(zhHtml).toContain('/chccc-site/en/about');
    const enHtml = readFileSync(join(distDir, 'en/about/index.html'), 'utf-8');
    expect(enHtml).toContain('/chccc-site/zh/about');
  });

  it('sermons page has Twitch embed', () => {
    const html = readFileSync(join(distDir, 'en/sermons/index.html'), 'utf-8');
    expect(html).toContain('player.twitch.tv');
    expect(html).toContain('chccc08003');
  });

  it('giving page has PayPal link', () => {
    const html = readFileSync(join(distDir, 'en/giving/index.html'), 'utf-8');
    expect(html).toContain('paypal.com');
  });

  it('news list shows announcement cards', () => {
    const html = readFileSync(join(distDir, 'en/news/index.html'), 'utf-8');
    expect(html).toContain('Spring Church Retreat');
  });

  it('news detail page renders content', () => {
    const html = readFileSync(join(distDir, 'en/news/sample-announcement/index.html'), 'utf-8');
    expect(html).toContain('Spring Church Retreat');
    expect(html).toContain('Spring Retreat in April');
  });

  it('about page has beliefs, pastors, and history sections', () => {
    const html = readFileSync(join(distDir, 'en/about/index.html'), 'utf-8');
    expect(html).toContain('id="beliefs"');
    expect(html).toContain('id="pastors"');
    expect(html).toContain('id="history"');
  });

  it('footer links point to real pages', () => {
    const html = readFileSync(join(distDir, 'en/index.html'), 'utf-8');
    expect(html).toContain('/chccc-site/en/about');
    expect(html).toContain('/chccc-site/en/giving');
    expect(html).toContain('/chccc-site/en/contact');
    // No more href="#" in footer
    expect(html).not.toMatch(/<footer[\s\S]*?href="#"[\s\S]*?<\/footer>/);
  });
});

describe('Content collections', () => {
  it('announcements exist in both locales', () => {
    const zhDir = join(__dirname, '..', 'src/content/announcements/zh');
    const enDir = join(__dirname, '..', 'src/content/announcements/en');
    expect(readdirSync(zhDir).filter((f) => f.endsWith('.md')).length).toBeGreaterThan(0);
    expect(readdirSync(enDir).filter((f) => f.endsWith('.md')).length).toBeGreaterThan(0);
  });

  it('about content exists in both locales', () => {
    const dir = join(__dirname, '..', 'src/content/about');
    const files = readdirSync(dir);
    expect(files).toContain('beliefs.zh.md');
    expect(files).toContain('beliefs.en.md');
    expect(files).toContain('history.zh.md');
    expect(files).toContain('history.en.md');
  });

  it('pastors content exists in both locales', () => {
    const zhDir = join(__dirname, '..', 'src/content/pastors/zh');
    const enDir = join(__dirname, '..', 'src/content/pastors/en');
    expect(readdirSync(zhDir).filter((f) => f.endsWith('.md')).length).toBeGreaterThan(0);
    expect(readdirSync(enDir).filter((f) => f.endsWith('.md')).length).toBeGreaterThan(0);
  });
});
