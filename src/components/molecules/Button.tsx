import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Button = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
    return (
        <MuiButton variant="contained" color="primary" onClick={onClick}>
            {children}
        </MuiButton>
    )
}

export default Button;