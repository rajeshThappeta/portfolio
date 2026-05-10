export const stats = [
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Students Trained', value: 10000, suffix: '+', display: '10,000+' },
  { label: 'Projects Built', value: 100, suffix: '+' },
]

export const curriculum = [
  {
    id: 'java',
    label: 'Java Full Stack',
    embedUrl: 'https://drive.google.com/file/d/1MascyZRhupLQWPbOc-lD97VEErhUb-G4/preview',
  },
  {
    id: 'mern',
    label: 'AI-Powered MERN Stack',
    embedUrl: 'https://drive.google.com/file/d/18LEWL2oOWZDoJLK2wrcY6kBX8qGzkfq7/preview',
  },
]

export const recommendations = Array.from({ length: 11 }, (_, i) => {
  const nums = [1,2,3,4,5,6,7,8,9,10,12]
  return { id: nums[i], src: `/recommendations/${nums[i]}.png` }
})
