export default function ModalWrapper({ onClose, children, maxWidth = "max-w-md" }) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className={`bg-[#221c54] border border-rose-500/50 rounded-2xl shadow-2xl w-full ${maxWidth} p-6 max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
