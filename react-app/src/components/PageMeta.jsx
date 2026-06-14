import { useEffect } from 'react';

const SITE_URL = 'https://www.healthymindcanine.com';
const DEFAULT_IMAGE = `${SITE_URL}/hmc-social-metatag-image.png`;

function upsertMeta({ selector, attribute, value, createTag }) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(createTag).forEach(([key, metaValue]) => {
      element.setAttribute(key, metaValue);
    });
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function upsertCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

function PageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    upsertCanonical(url);

    upsertMeta({
      selector: 'meta[name="description"]',
      attribute: 'content',
      value: description,
      createTag: { name: 'description' },
    });
    upsertMeta({
      selector: 'meta[property="og:title"]',
      attribute: 'content',
      value: title,
      createTag: { property: 'og:title' },
    });
    upsertMeta({
      selector: 'meta[property="og:description"]',
      attribute: 'content',
      value: description,
      createTag: { property: 'og:description' },
    });
    upsertMeta({
      selector: 'meta[property="og:url"]',
      attribute: 'content',
      value: url,
      createTag: { property: 'og:url' },
    });
    upsertMeta({
      selector: 'meta[property="og:image"]',
      attribute: 'content',
      value: DEFAULT_IMAGE,
      createTag: { property: 'og:image' },
    });
    upsertMeta({
      selector: 'meta[property="twitter:title"]',
      attribute: 'content',
      value: title,
      createTag: { property: 'twitter:title' },
    });
    upsertMeta({
      selector: 'meta[property="twitter:description"]',
      attribute: 'content',
      value: description,
      createTag: { property: 'twitter:description' },
    });
    upsertMeta({
      selector: 'meta[property="twitter:url"]',
      attribute: 'content',
      value: url,
      createTag: { property: 'twitter:url' },
    });
    upsertMeta({
      selector: 'meta[property="twitter:image"]',
      attribute: 'content',
      value: DEFAULT_IMAGE,
      createTag: { property: 'twitter:image' },
    });
  }, [description, path, title]);

  return null;
}

export default PageMeta;
