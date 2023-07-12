import { Link } from 'react-router-dom';
import { users } from '../db';

function Home() {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <Link to={`/users/${user.id}`}>
            <li>{user.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default Home;
