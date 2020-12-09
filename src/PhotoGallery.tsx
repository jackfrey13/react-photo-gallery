import { getImageData } from './imageData'
import Grid from '@material-ui/core/Grid'
import Photo from './Photo'

export const PhotoGallery = () => {
  const images = getImageData(20)
  return (
    <Grid container spacing={2}>
      {images.map(image => (
        <Grid item xs={4}>
          <Photo image={image} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PhotoGallery
