// 获取日历列表
const getDays = cur => {
  let date, currentWeek
  const days = []
  if (cur) {
    date = new Date(cur)
  } else {
    const now = new Date()
    let d = new Date(formatDate(now.getFullYear(), now.getMonth(), 1))
    d.setDate(35)
    date = new Date(formatDate(d.getFullYear(), d.getMonth() + 1, 1))
  }

  currentWeek = date.getDay()

  if (currentWeek === 0) {
    currentWeek = 7
  }

  const str = getFormatDate(date)
  days.length = 0

  for (let i = currentWeek; i >= 0; i--) {
    let d = new Date(str)
    d.setDate(d.getDate() - i)
    const item = {
      day: d,
      time: getFormatDate(d),
      num: 0
    }
    days.push(item)
  }

  for (let i = 1; i <= 41 - currentWeek; i++) {
    let d = new Date(str)
    d.setDate(d.getDate() + i)
    const item = {
      day: d,
      time: getFormatDate(d),
      num: 0
    }
    days.push(item)
  }

  return days
}
// 根据date对象获得格式化后的时间
const getFormatDate = day => {
  const year = day.getFullYear()
  const month = day.getMonth() + 1
  const date = day.getDate()
  return formatDate(year, month, date)
}
// 格式化时间
const formatDate = (year, month, day = 1) => {
  var y = year
  var m = month
  if (m < 10) m = '0' + m
  var d = day
  if (d < 10) d = '0' + d
  return y + '-' + m + '-' + d
}
// 获得当前yue时间
const getNowMonth = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  return year + '-' + (month < 10 ? '0' + month : month)
}

export { getDays, getFormatDate, formatDate, getNowMonth }
