import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('Account Created');
    return redirect('/login');
  } catch (error) {
    const errMsg =
      error?.response?.data?.error?.message ||
      'Please Check Again Your Credentials';
    toast.error(errMsg);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type={'text'}
          label={'username'}
          name={'username'}
        ></FormInput>
        <FormInput type={'email'} label={'email'} name={'email'}></FormInput>
        <FormInput
          type={'passowrd'}
          label={'password'}
          name={'password'}
        ></FormInput>
        <div className="mt-4">
          <SubmitBtn text={'register'} />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to={'/login'}
            className="ml-2 link-hover link link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
