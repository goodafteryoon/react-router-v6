import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
}

export default Root;
