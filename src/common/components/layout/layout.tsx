"use client"

// import type { Metadata } from "next"; // 사용하지 않으므로 제거
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"

import "../../../styles/common/reset.css"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// metadata export 제거
// export const metadata: Metadata = {
//   title: "어울림 스카이 | 최신 스카이 장비, 신속하고 안전한 작업",
//   description: "어울림 스카이는 전국 어디든 신속하게 출동하는 최신 스카이 장비 임대 서비스를 제공합니다. 안전하고 효율적인 고소 작업을 경험하세요.",
// };

// 동적 임포트로 모달 컴포넌트 가져오기
import NoticeModalManager from "../notice-modal/NoticeModalManager"
import FloatingCallButton from "@/common/components/button/FloatingCallButton"
import QueryProvider from "@/common/providers/query-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")

  return (
    <html lang="ko" className={inter.variable}>
      <body>
        <QueryProvider>
          {children}
          {!isAdminPage && <NoticeModalManager />}
          <FloatingCallButton />
        </QueryProvider>
      </body>
    </html>
  )
}
