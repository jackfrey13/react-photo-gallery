type ImageData = Image[]

export type Image = {
  url: string
  caption: string
}

export const getImageData = (count: number): ImageData =>
  Array(count)
    .fill(null)
    .map((_x, i) => ({
      url: `https://picsum.photos/seed/photo${i}/600/600`,
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }))
