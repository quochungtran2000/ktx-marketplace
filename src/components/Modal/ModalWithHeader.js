import { DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import ModalBase from './ModalBase';

// type Props = ModalBaseProps & {
//   // Modal title
//   title: string;

//   // Additional classname for modal content container
//   className?: string;
// };

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  contentRoot: {
    padding: theme.spacing(2)
  }
}));

const ModalWithHeader = (props) => {
  const { children, open, onClose, title, className } = props;

  const classes = useStyles();

  return (
    <ModalBase open={open} onClose={onClose}>
      <DialogTitle
        disableTypography
        classes={{
          root: classes.titleRoot
        }}>
        <Typography variant="h6">{title}</Typography>
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent
        dividers
        classes={{
          root: classes.contentRoot
        }}>
        <div className={className}>{children}</div>
      </DialogContent>
    </ModalBase>
  );
};

export default ModalWithHeader;
