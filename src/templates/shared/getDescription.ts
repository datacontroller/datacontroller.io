const extractContent = (s: string): string => {
  if (typeof document !== `undefined`) {
    const span = document.createElement('span')
    span.innerHTML = s
    return span.textContent || span.innerText
  }
  return s
}
const getDescription = (content: string): string => {
  return extractContent(content).substr(0, 100) + '...'
}

export default getDescription
