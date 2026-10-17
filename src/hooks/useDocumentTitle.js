import { useEffect } from 'react';
import { SCHOOL } from '../data/siteInfo';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SCHOOL.name}` : SCHOOL.name;
  }, [title]);
}
