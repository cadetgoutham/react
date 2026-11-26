import { useEffect, useRef } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

export default function ConfirmModal({ open, title, message, confirmLabel = 'Confirm', onConfirm, onCancel }) {
  const cancelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    cancelRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onCancel();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in print:hidden"
      onClick={onCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
            <FiAlertTriangle size={24} />
          </div>
          <div>
            <h2 id="confirm-title" className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{message}</p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button ref={cancelRef} type="button" className="btn-secondary !py-2" onClick={onCancel}>Cancel</button>
          <button type="button" className="btn-danger !py-2" onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
