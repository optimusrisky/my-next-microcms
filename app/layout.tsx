import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    // ここに記述したルールに基づいてタイトルが設定される
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "[Next.js+ヘッドレスCMSではじめる!かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "[Next.js+ヘッドレスCMSではじめる!かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      {/* 外部ドメインから読み込むスクリプトのことをサードパーティスクリプトという。通常、サードパーティスクリプトは読み込むタイミングに気をつけないと、パフォーマンスを低下させてしまう */}
      <GoogleAnalytics gaId="G-XXX" />
    </html>
    // Core Web Vitalsの三大指標
  );
}
