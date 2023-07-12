import { useParams } from 'react-router-dom';
import { users } from '../../db';

const User = () => {
  const { id } = useParams();
  console.log(typeof Number(id));

  return (
    <h1>
      User name is {users[Number(id) - 1].name} and id Number is {id}{' '}
    </h1>
  );
};

export default User;
