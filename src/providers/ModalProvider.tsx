"use client";

import Modal from "@/components/Modals/Modal";
import { Fragment, useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Fragment>
      <Modal
        title="Test Modal"
        onChange={() => {}}
        description="This a test description"
        isOpen={true}
      >React Nodes</Modal>
    </Fragment>
  );
};

export default ModalProvider;
