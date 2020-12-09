type ImageData = Image[]

export type Image = {
  url: string
  caption: string
  id: string
}

export const getImageData = (count: number): ImageData =>
  Array(count)
    .fill(null)
    .map((_x, i) => {
      const id = `photo${i}`

      return {
        url: `https://picsum.photos/seed/${id}/600/600`,
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        id: id
      }
    })
    .concat({
      url: 'asdf.jpg',
      caption: '',
      id: 'photoerror'
    })
