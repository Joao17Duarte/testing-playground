// export function commaSeparatedToArray(text) {
//   return (
//     text
//       // .charAt(0)
//       // .toUpperCase()
//       // .slice(1)
//       .split(',')
//       .map(item => item.trim())
//       .sort()
//   )
// }

export function commaSeparatedToArray(text) {
  return text
    .split(',')
    .map(item => item.trim())
    .map(item => item.toLowerCase().charAt(0).toUpperCase() + item.slice(1))
    .sort()
}
