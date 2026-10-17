export default function PageHeader({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </>
  );
}
