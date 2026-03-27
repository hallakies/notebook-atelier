import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "노트북 아틀리에 | 취향에 맞는 프리미엄 노트북 추천",
    template: "%s | 노트북 아틀리에",
  },
  description:
    "4개의 질문으로 취향에 맞는 맥북과 프리미엄 노트북을 추천하고, 맥북의 역사·최신 소식·리뷰 큐레이션을 함께 제공하는 에디토리얼 커머스 사이트",
  keywords: [
    "노트북 아틀리에",
    "맥북 추천",
    "맥북 구매 가이드",
    "프리미엄 노트북 추천",
    "맥북 비교",
    "맥북 뉴스",
    "맥북 리뷰",
  ],
  openGraph: {
    title: "노트북 아틀리에 | 취향에 맞는 프리미엄 노트북 추천",
    description:
      "4개의 질문으로 취향에 맞는 맥북과 프리미엄 노트북을 추천하는 에디토리얼 커머스 사이트",
    siteName: "노트북 아틀리에",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "노트북 아틀리에 | 취향에 맞는 프리미엄 노트북 추천",
    description:
      "4개의 질문으로 취향에 맞는 맥북과 프리미엄 노트북을 추천하는 에디토리얼 커머스 사이트",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
