import styles from "./modal.module.css";

export function Modal({
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  visible,
  disableBtnConfirm = false,
}) {
  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.modalBody}>{children}</div>

        <footer>
          <button onClick={onCancel} className={styles.btnCancel}>
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={disableBtnConfirm}
            className={styles.btnConfirm}
          >
            {confirmLabel}
          </button>
        </footer>
      </div>
    </div>
  );
}
