import ButtonLink from '../components/ButtonLink';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <section className="page">
      <h1>Page not found</h1>
      <p className="page-lead">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="page-actions">
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>
    </section>
  );
}
