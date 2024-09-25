import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagenation";
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";
import { getNewsList } from "../_libs/microcms";

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
