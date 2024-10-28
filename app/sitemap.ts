// Webサイト上のページや、動画などのファイルについての情報や、各ファイルの関係を伝えるもの。
// 検索ファイルはこのファイルを読み込み、効率的にクロールを行う。
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=ja
// http://localhost:3000/sitemap.xml

import { MetadataRoute } from "next";
import { getAllCategoryList, getAllNewsList } from "./_libs/microcms";

const buildUrl = (path?: string) => `https://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/news/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );
  const now = new Date();
  // returnされているデータがサイトマップとして認識される
  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/members"),
      lastModified: now,
    },
    {
      url: buildUrl("/contact"),
      lastModified: now,
    },
    {
      url: buildUrl("/news"),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
}

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file
