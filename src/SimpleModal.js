import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { UsernameContext } from './UsernameContext';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    border: '1px solid #fafafa',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor : '#fafafa'
  },
}));

export default function SimpleModal() {
    const { changeUsername }=useContext(UsernameContext);
    const classes = useStyles();
    let modalStyle = {
        width:'min(20%,40px)',
        height:'auto',
      marginTop:'10%',
      marginLeft:'40%',
      backgroundColor : '#fafafa'
    }
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Sign Up</h2>
        <p id="simple-modal-description">
        Enter Your  Username
        </p>
        <form onSubmit={e =>{
            e.preventDefault()
            setOpen(false)
        }} >
        <input type='Text' placeholder='Enter Username' 
        onChange={e=>changeUsername(e)}
        />
        </form>
        </div>
    );

    return (
        <div>
        <button type="button" onClick={handleOpen} 
            style={{
                margin:'10px',
                color:'white',
                transform:'scale(1.4)',
                backgroundColor:'#0099cc',
                border:'1px solid ',
                borderRadius:'5px',
                alignItems:'center',
                focus:'false'
            }} >
            Sign Up
        </button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        </div>
    );
}

