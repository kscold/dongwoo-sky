"use client"

import ErrorComponent from "../../../../common/components/layout/ErrorComponent"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function NoticeDetailError({ error, reset }: ErrorProps) {
  return (
    <ErrorComponent
      error={error}
      reset={reset}
      title="공지사항을 불러오는데 실패했습니다"
      icon="📄"
      type="service"
      homeLink="/notice"
    />
  )
}
