import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

// *** Higher Order Function
// * an asynchronous function that takes an object with a property named `request`.

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      console.log(data);
      const resp = await customFetch.post('/auth/local', data);

      store.dispatch(loginUser(resp.data));
      toast.success('Login Successfull');
      return redirect('/');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logInAsGuest = async () => {
    try {
      const resp = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });

      dispatch(loginUser(resp.data));
      toast.success('Welcome Guest User');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Guest User Login Error , Please Try Again Later');
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className=" card w-96 py-8 px-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type={'email'}
          label={'email'}
          name={'identifier'}
        ></FormInput>
        <FormInput
          type={'password'}
          label={'password'}
          name={'password'}
        ></FormInput>
        <div className="mt-4">
          <SubmitBtn text={'Login'}></SubmitBtn>
          <button
            type="button"
            onClick={logInAsGuest}
            className="btn  mt-6 btn-secondary btn-block"
          >
            Guest User
          </button>
          <p className="text-center">
            Not a Member yet?
            <Link to={'/register'} className="ml-2 link link-hover">
              Register
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default Login;
