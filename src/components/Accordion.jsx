import { useId, useState } from 'react';

/** Single-open accordion. `renderPanel(section)` returns the panel body. */
export default function Accordion({ sections, defaultOpen = null, renderPanel }) {
  const [openId, setOpenId] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="accordion">
      {sections.map((section) => {
        const isOpen = openId === section.id;
        const headerId = `${baseId}-${section.id}-header`;
        const panelId = `${baseId}-${section.id}-panel`;

        return (
          <div key={section.id} className={`acc-item${isOpen ? ' open' : ''}`}>
            <h2 className="acc-heading">
              <button
                type="button"
                id={headerId}
                className="acc-header"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : section.id)}
              >
                <span>{section.title}</span>
                <span className="acc-icon" aria-hidden="true">{isOpen ? '▴' : '▾'}</span>
              </button>
            </h2>
            <div id={panelId} role="region" aria-labelledby={headerId} hidden={!isOpen} className="acc-panel">
              {renderPanel(section)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
