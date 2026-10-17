import { useEffect, useRef, useState } from 'react';
import ButtonLink from '../components/ButtonLink';
import PageHeader from '../components/PageHeader';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { facilities } from '../data/facilities';

export default function Facilities() {
  useDocumentTitle('Facilities');

  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  // Native <dialog> gives us focus trapping, Escape-to-close, and focus
  // restoration to the trigger button for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && dialog && !dialog.open) dialog.showModal();
  }, [selected]);

  return (
    <section className="page">
      <PageHeader title="Our Facilities" subtitle="Spaces that inspire learning, creativity, and community" />

      <ul className="gallery-grid">
        {facilities.map((facility) => (
          <li className="gallery-item" key={facility.title}>
            <button
              type="button"
              className="gallery-image-button"
              onClick={() => setSelected(facility)}
              aria-label={`Zoom in on ${facility.title}`}
            >
              <img src={facility.image} alt={facility.title} loading="lazy" decoding="async" />
            </button>
            <div className="gallery-caption">{facility.title}</div>
          </li>
        ))}
      </ul>

      <div className="page-actions">
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={selected ? `${selected.title} enlarged view` : undefined}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close(); // backdrop click
        }}
      >
        {selected && (
          <figure>
            <button
              type="button"
              className="lightbox__close"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close enlarged image"
            >
              ×
            </button>
            <img src={selected.image} alt={selected.title} />
            <figcaption>{selected.title}</figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
