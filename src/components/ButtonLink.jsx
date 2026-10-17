import { Link } from 'react-router-dom';

/**
 * A real link styled as a button. Use instead of <button onClick={navigate}>
 * so middle-click, "open in new tab" and screen-reader link lists all work.
 * Pass `to` for internal routes or `href` for external URLs.
 */
export default function ButtonLink({ to, href, variant, className = '', children, ...rest }) {
  const classes = ['btn', variant && `btn--${variant}`, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} to={to} {...rest}>
      {children}
    </Link>
  );
}
