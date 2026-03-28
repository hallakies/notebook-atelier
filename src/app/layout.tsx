import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://notebook-at.netlify.app";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "노트북 아틀리에 | 나에게 맞는 맥북 추천",
    template: "%s | 노트북 아틀리에",
  },
  description:
    "4개의 질문으로 나에게 맞는 맥북을 빠르게 추천하고, 바로 살 수 있는 구매 링크까지 연결하는 구매 결정 도구",
  keywords: [
    "노트북 아틀리에",
    "맥북 추천",
    "맥북 구매 가이드",
    "맥북 에어 vs 프로",
    "학생 맥북 추천",
    "개발자 맥북 추천",
    "직장인 맥북 추천",
    "맥북 비교",
    "맥북 지금 사도 될까",
  ],
  openGraph: {
    title: "노트북 아틀리에 | 나에게 맞는 맥북 추천",
    description:
      "4개의 질문으로 나에게 맞는 맥북을 빠르게 추천하고, 바로 구매 링크까지 연결하는 구매 결정 도구",
    siteName: "노트북 아틀리에",
    locale: "ko_KR",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "노트북 아틀리에 | 나에게 맞는 맥북 추천",
    description:
      "4개의 질문으로 나에게 맞는 맥북을 빠르게 추천하고, 바로 구매 링크까지 연결하는 구매 결정 도구",
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
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
