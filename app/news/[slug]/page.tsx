import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail, News } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk });
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

// 更新頻度の高いページのため、SSRを適用
// revalidate... キャッシュの保持期間(秒)
// キャッシュを使わずに毎回オリジンサーバーへデータを取得しに行くということ
// export const revalidate = 0;

// SSRではキャッシュが全く利用されない状態となるため、ISRを適用 -> revalidateの値を1以上にする
// 60秒間はCDNにあるキャッシュが保持される方式となる
// export const revalidate = 60;

export default async function Page({ params, searchParams }: Props) {
  const data: News = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
