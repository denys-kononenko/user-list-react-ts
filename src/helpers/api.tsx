import { User } from '../types/User';

const MAIN_URL = 'https://jsonplaceholder.typicode.com';

const getData = <T, >(url: string): Promise<T> => (
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error()
    }

    return res.json()
  })
);

export const getUsers = () => getData<User[]>(`${MAIN_URL}/users`);

export const getUserInfo = (id: string) => getData<User>(`${MAIN_URL}/users/${id}`);
