const grades = (from, to) =>
  Array.from({ length: to - from + 1 }, (_, i) => `Grade ${from + i}`);

export const programs = [
  {
    id: 'tots',
    title: 'Tots (Pre-Nursery to Kindergarten)',
    intro:
      'Our Tots program focuses on early learning foundations—language, numeracy, social skills, and values formation in a supportive environment.',
    levels: ['Pre-Nursery', 'Nursery', 'Pre-Kindergarten', 'Kindergarten'],
  },
  {
    id: 'elem',
    title: 'Elementary (Grade 1 – Grade 6)',
    intro:
      'Our Elementary program builds strong academic skills and good study habits through guided learning and student activities.',
    levels: grades(1, 6),
  },
  {
    id: 'jhs',
    title: 'Junior High School (Grade 7 – Grade 10)',
    intro:
      'Junior High supports academic growth, character building, and preparedness for Senior High.',
    levels: grades(7, 10),
  },
  {
    id: 'shs',
    title: 'Senior High School (Grade 11 – Grade 12)',
    intro:
      'Senior High prepares learners for college, employment, and lifelong learning through specialized tracks and practical experiences.',
    levels: grades(11, 12),
    note: 'Track/strand offerings may vary. Please contact the school for the latest list.',
  },
];
