import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Image } from './imageData'
import Modal from './Modal'

const useStyles = makeStyles({
  figure: {
    border: 'thin #c0c0c0 solid',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    borderRadius: '10px',
    margin: 'auto'
  },

  wrapper: {
    borderRadius: '10px'
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
}

export const Photo = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => setOpen(false)
  const classes = useStyles()
  const { image, disableModal } = props

  return (
    <>
      <Paper
        elevation={3}
        className={classes.wrapper}
        onClick={() => setOpen(true)}>
        <figure className={classes.figure}>
          <img src={image.url} alt={image.caption} className={classes.image} />
          <figcaption className={classes.figcaption}>
            {image.caption}
          </figcaption>
        </figure>
      </Paper>
      <Modal
        handleClose={handleClose}
        open={disableModal ? false : open}
        image={image}
      />
    </>
  )
}

export default Photo
