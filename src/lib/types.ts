
export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin';
}

export type LoginCredentials = {
  email: string;
  password: string;
}

export type UserProfile = {
  name: string;
  email: string;
  address: string;
}
