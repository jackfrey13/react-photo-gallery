import { useState } from 'react'
import { getImageData } from './imageData'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Pagination from '@material-ui/lab/Pagination'
import Photo from './Photo'

const useStyles = makeStyles(theme => ({
  grid: {
    margin: theme.spacing(3)
  }
}))

export const PhotoGallery = () => {
  const [page, setPage] = useState<number>(1)
  const [startIndex, setStartIndex] = useState<number>(0)
  const imageCount = 20
  const imagesPerPage = 9
  const images = getImageData(20)
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} className={classes.grid}>
        {images.slice(startIndex, startIndex + imagesPerPage).map(image => (
          <Grid item xs={4}>
            <Photo image={image} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" pb={3}>
        <Pagination
          count={Math.ceil(imageCount / imagesPerPage)}
          page={page}
          onChange={(_e, page) => {
            setPage(page)
            setStartIndex(imagesPerPage * (page - 1))
          }}
          color="primary"
        />
      </Box>
    </Container>
  )
}

export default PhotoGallery
