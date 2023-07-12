import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

const User = () => {
  const { id } = useParams();

  return (
    <>
      <h1>
        User name is {users[Number(id) - 1].name} and id Number is {id}{' '}
      </h1>
      <div>
        <Link to={'followers'}>followers</Link>
        <Outlet context={{ nameOfUser: users[Number(id) - 1].name }} />
      </div>
    </>
  );
};

export default User;
