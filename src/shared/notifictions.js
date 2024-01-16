import { toast } from 'react-toastify';

export const showWarnNotification = text => {
  // Пример уведомленияnpm install --save react-toastify
  toast.warn(text, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
    theme: 'colored',
  });
};

export const showSuccessNotification = text => {
  // Пример уведомленияnpm install --save react-toastify
  toast.success(text, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
    theme: 'colored',
  });
};
