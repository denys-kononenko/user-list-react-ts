import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from './ErrorMessage';
import { UsersContext } from '../contexts/UsersContext';

export const UserList: React.FC = () => {
  const { users, hasError } = useContext(UsersContext);

  return (
    <>
      {hasError && <ErrorMessage />}

      {!hasError && !!users.length && (
        <ul>
          {users.map(user => {
            const { id, name } = user;

            return (
              <li key={id} className="is-flex is-justify-content-space-between is-align-items-center p-1">
                <div>
                  {name}
                </div>

                <Link to={`users/${id}`} className="button is-link is-small  ml-1">Деталі</Link>
              </li>
          )})}
        </ul>
      )}
    </>
  )
}
