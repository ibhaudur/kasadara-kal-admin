import React from 'react';
import { ModalProps } from '../../types/component.types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0000008f] bg-opacity-10" data-testid="modal">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-3 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 cursor-pointer text-3xl hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
