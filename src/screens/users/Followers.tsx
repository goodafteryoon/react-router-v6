import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfUser: string;
}

const Followers = () => {
  const { nameOfUser } = useOutletContext<IFollowersContext>();

  return <h1>Here are {nameOfUser}의 followers</h1>;
};

export default Followers;
