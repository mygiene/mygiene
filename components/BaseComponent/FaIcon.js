export const FaIcon = ({ title, className, ...p }) => (
  <i {...p} className={`fa ${className || ""}`} aria-hidden="true">
    {title || ""}
  </i>
);
