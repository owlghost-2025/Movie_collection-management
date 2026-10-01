import ModalWrapper from "./ModalWrapper";

export default function ConfirmDeleteModal({ movie, onCancel, onConfirm }) {
  return (
    <ModalWrapper onClose={onCancel} maxWidth="max-w-sm">
      <div className="text-center">
        <h2 className="font-display font-bold text-lg text-white">
          Delete this movie?
        </h2>
        <p className="text-sm text-[#a8a3cd] mt-2">
          Are you sure you want to delete "{movie.title}"? This can't be
          undone.
        </p>
        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-full border border-[#39316f] text-sm text-[#c7c2ea] cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
