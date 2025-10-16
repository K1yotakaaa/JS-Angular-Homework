export interface Contact {
  id: number,
  name: string,
  role: string,
  email: string,
  phone: string,
  icon: string
}

export const contacts = [
  {
    id: 1,
    name: 'Daniel Lucius',
    role: 'Frontend Developer',
    email: 'daniel@example.com',
    phone: '+7 777 123 4567',
    icon: '👨‍💻',
  },
  {
    id: 2,
    name: 'Support Team',
    role: 'Customer Support',
    email: 'support@example.com',
    phone: '+7 777 987 6543',
    icon: '🎧',
  },
  {
    id: 3,
    name: 'Sales Department',
    role: 'Sales Manager',
    email: 'sales@example.com',
    phone: '+7 777 222 3344',
    icon: '💼',
  },
];