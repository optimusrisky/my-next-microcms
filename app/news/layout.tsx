import { Metadata } from "next";
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata: Metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

// layout.tsxにrevalidateを設定することで、下の階層すべてに適用することができる。
// ※親階層と子階層で指定しているrevalidateの値が違う場合は、小さい方の値(更新頻度の高い値)が適用される。
export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
