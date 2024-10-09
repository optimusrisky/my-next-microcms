// Middlewareとは
// リクエストがNext.jsのサーバーサイドに到達する前に何らかの処理を動かせる機構
// ・リクエストの検証や変更
// ・認証や認可のチェック
// ・リダイレクト
// ・カスタムロギングや監視
// Next.js 13からはMiddlewareの処理がVercelのエッジサーバー上にて行われるようになっているため、レスポンスも高速

import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

// ----------------------
// import { NextRequest, NextResponse } from "next/server";

// // middleware内がMiddlewareの処理部分
// export function middleware(request: NextRequest) {
//   console.log("middleware: " + request.url);

//   // 通常のサーバーサイド処理に移る
//   // ここでリダイレクトやエラーを返したりすると通常のサーバーサイド処理に到達する前にブラウザにレスポンスが返される
//   return NextResponse.next();
// }

// ↓マッチャー（空のオブジェクトを指定している場合はすべてのリクエストにマッチしているとみなし、middlewareの処理が実行される）
// export const config = {};
// 特定のパスをmatcherに設定することで、そのパスとマッチする時のみMiddlewareを動作させることができる。
// export const config = {
//   matcher: '/about/:path*'
// };

// 複数パスを設定したい場合は配列形式
// export const config = {
//   matcher: ['/about/:path*', '/dashboard/:path*'],
// }
// ----------------------

// Basic認証

export const middleware = createNextAuthMiddleware();

export const config = {
  matcher: ["/(.*)"],
};
