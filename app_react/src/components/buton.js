import Button from '@mui/material/Button';

function MyButton({ count, onClick }) {
    return(
        <Button variant="outlined" onClick={ onClick }>Clicado {count} vezes.</Button>
    );
};

export default MyButton