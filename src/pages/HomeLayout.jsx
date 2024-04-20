import { Outlet } from 'react-router-dom';
import { Header } from '../components';
const HomeLayout = () => {
  return (
    <>
      <Header></Header>

      <section className="align-element py-20">
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default HomeLayout;
