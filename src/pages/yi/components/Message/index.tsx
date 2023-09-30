import './index.css';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom/client'
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface P {
  children: any,
  type: string;
  autoHideDuration: number
}

let container = document.getElementById('message-container')
if (!container) {
  container = document.createElement('div')
  container.setAttribute('id', 'message-container')
  document.body.appendChild(container)
}

function Message(props: P) {
  const { children, type } = props;
  const [visible, setVisible] = useState(true);

  function handleClose() {
    setVisible(false);
  }

  if (visible) {
    return createPortal(
      <Snackbar open={visible} autoHideDuration={6000} onClose={handleClose} sx={{ width: '100%' }}>
        {
          // @ts-ignore 
          <Alert severity={type} sx={{ width: '96%' }} onClose={handleClose}>
            {children}
          </Alert>
        }
      </Snackbar>,
      // @ts-ignore
      document.getElementById('message-container'))
  } else {
    return null
  }
}

export default {
  success(msg: string, autoHideDuration = 6000) {
    this.show(msg, 'success', autoHideDuration)
  },
  warn(msg: string, autoHideDuration = 6000) {
    this.show(msg, 'warning', autoHideDuration)
  },
  error(msg: string, autoHideDuration = 6000) {
    this.show(msg, 'error', autoHideDuration)
  },
  info(msg: string, autoHideDuration = 6000) {
    this.show(msg, 'info', autoHideDuration)
  },
  show(msg: string, type = 'info', autoHideDuration = 6000) {
    ReactDOM.createRoot(container as HTMLElement).render(
      <Message autoHideDuration={autoHideDuration} type={type}>
        {msg}
      </Message>
    )
  }
}
// export default memo(Message);