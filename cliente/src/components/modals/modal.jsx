import React, { useState, useEffect } from 'react';

function Modal({ isOpen, onClose, onDelete }) {
  // Este efecto se encarga de escuchar el evento 'keydown' y cerrar el modal cuando se presiona la tecla 'Escape'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="min-h-screen px-4 text-center items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />

        <div className="inline-block align-middle bg-white rounded p-4 text-left overflow-hidden shadow-xl transform transition-all">
          <h3 className="text-lg leading-6 font-medium text-black">
            Confirmar eliminación
          </h3>

          <div className="mt-2">
            <p className="text-sm text-black">
              ¿Estás seguro de que quieres borrar esta tarea?
            </p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
              onClick={onDelete}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
