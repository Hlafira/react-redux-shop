import { toast } from 'react-toastify';

export const showWarnNotification = text => {
  // Пример уведомленияnpm install --save react-toastify
  toast.warn(text, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
    theme: 'colored',
  });
};
