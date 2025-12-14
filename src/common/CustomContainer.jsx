import { Container } from '@mui/material';

export default function CustomContainer({ children, color}) {
    return (
        <Container
            maxWidth={false}
            sx={{
                px: { xs: 2, sm: 3, md: 4 }, // responsive horizontal padding
                py: { xs: 2, sm: 3, md: 4 }, // responsive vertical padding
                width: { xs: '95%', sm: '90%', md: '95%', lg: '90%', xl: '90%' },
                margin: '0 auto',
            }}
            style={{ color: color}}
        >
            {children}
        </Container>
    );
}
