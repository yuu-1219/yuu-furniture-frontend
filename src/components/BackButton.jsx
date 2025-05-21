import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function BackButton ({text, link}) {
    return (
        <Link 
          to={link}
          style={{ color: 'inherit', textDecoration: 'none'}} 
        >
          <Box
            sx={{ 
                display: 'flex',  
                justifyContent: 'center',
                alignItems: 'center', 
                gap: 1
              }} 
          >
            <p>{text}</p>
            <ArrowBackIosIcon style={{fontSize: "medium"}}/>
          </Box>
        </Link>
    )
}