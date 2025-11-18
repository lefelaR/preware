import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '../molecules/Button';
import Typography from '@mui/material/Typography';

const ImgMediaCard = ({ title, description, image }: { title: string, description: string, image: string }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{title}</h2>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p className="text-sm text-gray-500">{description}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => {}}>Share</Button>
        <Button onClick={() => {}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;