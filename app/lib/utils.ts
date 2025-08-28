export function formatViewCount(viewCount: number) {
  if (viewCount >= 10000) {
    return `觀看次數 : ${(viewCount / 10000).toFixed(1)}萬次`
  }

  return `觀看次數 : ${viewCount}次`
}

export function formatPublishedAt(time: string) {
  const timestamp = new Date(time).getTime()
  const diff = Date.now() - timestamp

  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)

  if (minutes < 60) {
    return `${minutes}分鐘前`
  }

  if (hours < 24) {
    return `${hours}小時前`
  }

  if (days < 7) {
    return `${days}天前`
  }

  if (days <= 30) {
    return `${weeks}週前`
  }

  if (days <= 60) {
    return '1個月前'
  }

  return new Date(time).toLocaleDateString('zh-TW')
}