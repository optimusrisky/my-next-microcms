import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagenation";
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";
import { getNewsList } from "../_libs/microcms";

// 更新頻度の高いページのため、SSRを適用
// revalidate... キャッシュの保持期間(秒)
// キャッシュを使わずに毎回オリジンサーバーへデータを取得しに行くということ
// export const revalidate = 0;

// SSRではキャッシュが全く利用されない状態となるため、ISRを適用 -> revalidateの値を1以上にする
// 60秒間はCDNにあるキャッシュが保持される方式となる
export const revalidate = 60;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList();

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
