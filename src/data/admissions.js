const photos = (count, kind = 'ID picture') => ({
  label: `${count} copies`,
  detail: `of 2" x 2" recent colored ${kind}`,
});
const VERIFY = 'Bring the original copy for verification.';

const BIRTH_CERT = { label: 'Photocopy of PSA Birth Certificate', detail: '(Filipino students)', note: VERIFY };
const I_CARD = { label: 'Photocopy of I-Card', detail: '(Foreign students)', note: VERIFY };
const MEDICAL = { label: 'Medical / Dental Record', detail: '(school form/record, as required)' };
const ENTRANCE = { label: 'Entrance exam and/or interview', detail: '(if required; as scheduled)' };
const OTHER = { label: 'Other requirements', detail: 'as may be required by the school' };

export const admissionSections = [
  {
    id: 'tots-new',
    title: 'Tots (Pre-Nursery to Kindergarten) — New Students: What to Bring',
    items: [
      photos(6),
      BIRTH_CERT,
      I_CARD,
      { label: 'Accomplished Information Sheet', detail: '(provided by the school / to be filled out during enrollment)' },
      MEDICAL,
      ENTRANCE,
      OTHER,
    ],
    actions: true,
  },
  {
    id: 'elem-shs-new',
    title: 'Elementary to Senior High — New / Transferee Students: What to Bring',
    items: [
      photos(6),
      BIRTH_CERT,
      I_CARD,
      { label: 'Certificate of Good Moral Character' },
      { label: 'Original Progress Report Card / Form 138', detail: '(signed by the School Principal)' },
      { label: 'Accomplished Information Sheet', detail: '(school form)' },
      MEDICAL,
      ENTRANCE,
      OTHER,
    ],
    note: 'Note: Specific requirements may still vary by grade level. Please confirm with the Admissions Office.',
    actions: true,
  },
  {
    id: 'old',
    title: 'Old Students (Continuing) — What to Bring',
    items: [photos(4, 'picture'), OTHER],
  },
  {
    id: 'returning',
    title: 'Returning Students',
    intro:
      'Returning students are typically processed as new students and follow the applicable new student requirements and screening.',
  },
  {
    id: 'payment',
    title: 'Fees & Payment (Basic Info)',
    items: [
      { detail: 'School fees are paid at the Accounting Office.' },
      { detail: 'Enrollment is on a school-year basis.' },
      { detail: 'Payment may be collected on a semestral or quarterly basis.' },
    ],
    note: 'For the latest fee breakdown, deadlines, and schedules, please contact the school directly.',
  },
];
