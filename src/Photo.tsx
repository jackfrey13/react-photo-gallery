import { makeStyles } from '@material-ui/core/styles'
import { Image } from './imageData'

const useStyles = makeStyles({
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
}
export const Photo = (props: Props) => {
  const classes = useStyles()
  const { image } = props

  return (
    <figure className={classes.figure}>
      <img src={image.url} alt={image.caption} className={classes.image} />
      <figcaption className={classes.figcaption}>{image.caption}</figcaption>
    </figure>
  )
}

export default Photo
