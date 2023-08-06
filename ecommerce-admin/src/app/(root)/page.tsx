"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="Title" description="Description" isOpen onClose={() => {}}>
        Chilellodren
      </Modal>
    </div>
  );
};

export default SetupPage;
