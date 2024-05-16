import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar } from '../components';
import Loading from '../components/Loading';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {isPageLoading ? (
        <Loading></Loading>
      ) : (
        <section className="align-element py-20">
          <Outlet></Outlet>
        </section>
      )}
    </>
  );
};
export default HomeLayout;
