type ImageData = {
  url: string
  caption: string
}[]

export const getImageData = (count: number): ImageData =>
  Array(count)
    .fill(null)
    .map((_x, i) => ({
      url: `https://picsum.photos/300/300?random=${i}`,
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }))
