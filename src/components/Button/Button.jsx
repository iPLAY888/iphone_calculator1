export default function Button({ children, className, handleNumber }) {
  return (
    <div className={`item ${className}`} onClick={handleNumber}>
      {children}
    </div>
  );
}
