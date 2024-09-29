import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import { getNewsList, News } from "./_libs/microcms";
import NewsList from "./_components/NewsList";
import { TOP_NEWS_LIMIT } from "./_constants";

// トップページには最新のお知らせが2件表示されるため、revalidateの値を詳細ページと合わせるor長くする
// あるAPIに対する一覧ページと詳細ページにおけるキャッシュの保持時間(revalidate)は同じにするか、詳細ページの方が短くなるようにセットしておくといい。
export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          src="/img-mv.jpg"
          alt="aaa"
          width={4000}
          height={1200}
          className={styles.bgimg}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
