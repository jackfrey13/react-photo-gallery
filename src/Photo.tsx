import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import BrokenImageIcon from '@material-ui/icons/BrokenImage'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Image } from './imageData'
import Modal from './Modal'

const useStyles = makeStyles({
  wrapper: {
    borderRadius: '10px',
    height: '100%'
  },

  pointer: {
    cursor: 'pointer'
  },

  figure: {
    border: 'thin #c0c0c0 solid',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    borderRadius: '10px',
    margin: 'auto'
  },

  image: {
    width: '100%',
    borderRadius: '10px'
  },

  figcaption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
    color: '#fff',
    font: 'italic smaller sans-serif',
    textAlign: 'center',
    height: '35px',
    marginTop: '-35px',
    borderRadius: '0 0 10px 10px'
  }
})

type Props = {
  image: Image
  disableModal?: boolean
  setZoomIn?: (zoomIn: boolean) => void
}

export const Photo = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [imageFailed, setImageFailed] = useState<boolean>(false)
  const handleClose = () => setOpen(false)
  const classes = useStyles()
  const { image, disableModal, setZoomIn } = props
  const enableClick = !disableModal && !imageFailed

  return (
    <>
      <Paper
        elevation={3}
        className={`${classes.wrapper}${
          enableClick ? ` ${classes.pointer}` : ''
        }`}
        onClick={() => enableClick && setOpen(true)}>
        {imageFailed ? (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%">
            <BrokenImageIcon color="error" fontSize="large" />
            <Typography color="error">Failed to load image</Typography>
          </Box>
        ) : (
          <figure className={classes.figure}>
            <img
              src={image.url}
              alt={image.caption}
              className={classes.image}
              onLoad={() => setZoomIn && setZoomIn(true)}
              onError={() => setImageFailed(true)}
            />
            {image.caption && (
              <figcaption className={classes.figcaption}>
                {image.caption}
              </figcaption>
            )}
          </figure>
        )}
      </Paper>
      <Modal handleClose={handleClose} open={open} image={image} />
    </>
  )
}

export default Photo
