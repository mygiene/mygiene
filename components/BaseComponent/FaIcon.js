export const FaIcon = ({ className, ...p }) => (
  <i {...p} className={`fa ${className || ""}`} aria-hidden="true"></i>
);
