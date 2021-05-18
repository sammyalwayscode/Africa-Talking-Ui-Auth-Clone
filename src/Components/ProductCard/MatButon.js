import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // backgroundColor: '#123456',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MatButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        Learn More
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} >
            <div style={{ width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap', textAlign: 'center' }}>
              <img src={props.MatImg} alt='' style={{ height: '100px', width: '100px', borderRadius: '50%', border: '3px solid #fc9206', objectFit: 'cover' }} />
              <h4 style={{ color: 'gray', fontWeight: '600', fontSize: '18px' }} id="transition-modal-title"> {props.TriTITLE} </h4>
              <p id="transition-modal-description" style={{ width: '300px', fontSize: '15px', color: '#000' }}> {props.TirCONTENT} </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
