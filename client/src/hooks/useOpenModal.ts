import { useCallback, useState } from "react";

const useOpenModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return {
    open,
    handleOpen,
    handleClose,
  };
};

export default useOpenModal;
