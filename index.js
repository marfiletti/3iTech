import './index.scss'
const decode = (str) => str
  .replace(/[-.]\d+/g, x => x[0] == '.' ? ''.padStart(x.slice(1), '1') : ''.padStart(x.slice(1), '0'))
  .match(/(1)+|(0)+/g)
  .map((i) => i.length=== 1 ? '.' : ((i.length - 2) / 2))
  .join('')
  .split('.')
  .reduce((acc, val ,i) => (
    (i % 2 === 0) && acc.push([]),
    acc[acc.length - 1]?.push(val),
    acc
  ), [])
  .sort((a, b) => a[1] - b[1])
  .map((v) => String.fromCharCode(v[0]))
  .join('')



  // ОТВЕТ - i love puzzles