import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserInfo } from '../helpers/api';
import { User } from '../types/User';
import { UserInfoItem } from './UserInfoItem';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import { UsersContext } from '../contexts/UsersContext';

export const UserInfo: React.FC = () => {
  const [info, setInfo] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();
  const { usersIds } = useContext(UsersContext);
  const usersIdsIndex = usersIds.indexOf(Number(id));

  useEffect(() => {
    setIsLoading(true);
    getUserInfo(id)
      .then(res => {
        setInfo(res);
        setHasError(false);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {hasError && <ErrorMessage />}

      {!isLoading && !hasError && info && (
        <div>
          <ul className="mb-5">
            <UserInfoItem title={'name'} value={info.name} />
            <UserInfoItem title={'username'} value={info.username} />
            <UserInfoItem title={'email'} value={info.email} />
            <UserInfoItem title={'phone'} value={info.phone} />
            <UserInfoItem title={'company'} value={info.company.name} />
            <UserInfoItem
              title={'address'}
              value={`${info.address.city}, ${info.address.street}, ${info.address.suite}`}
            />
          </ul>

          <div>
            <Link to={`/users/${usersIds[usersIdsIndex - 1]}`}>
              <button
                className="button is-small is-link"
                disabled={usersIdsIndex === 0}
              >
                Попередній
              </button>
            </Link>

            <Link to={"/"}>
              <button className="button is-small is-link mx-2">
                На головну
              </button>
            </Link>

            <Link to={`/users/${usersIds[usersIdsIndex + 1]}`}>
              <button
                className="button is-small is-link"
                disabled={usersIdsIndex === usersIds.length - 1}
              >
                Наступний
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
