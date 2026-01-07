import { toast } from "react-toastify";

export const errorToast = (message) => {
  toast.error(<div>{message}</div>, {
    autoClose: 2000,
  });
};
export const successToast = (message) => {
  toast.success(<div>{message}</div>, {
    autoClose: 2000,
  });
};
