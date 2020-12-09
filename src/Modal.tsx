import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Photo from './Photo'
import { Image } from './imageData'

const useStyles = makeStyles({
  button: {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '16px',
    right: '16px',
    color: '#FFF',
    background: 'rgba(0, 0, 0, 0.5)',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
})

type Props = {
  handleClose: () => void
  open: boolean
  image: Image
}

export const Modal = (props: Props) => {
  const { open, handleClose, image } = props
  const classes = useStyles()

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: {
          borderRadius: 10
        }
      }}>
      <IconButton onClick={handleClose} className={classes.button}>
        <CloseIcon />
      </IconButton>
      <Photo image={image} disableModal />
    </Dialog>
  )
}

export default Modal
