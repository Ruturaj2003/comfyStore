import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Login = () => {
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
          name={'identitfier'}
          defaultValue={'test@test.com'}
        ></FormInput>
        <FormInput
          type={'password'}
          label={'password'}
          name={'password'}
          defaultValue={'secret'}
        ></FormInput>
        <div className="mt-4">
          <SubmitBtn text={'Login'}></SubmitBtn>
          <button type="button" className="btn  mt-6 btn-secondary btn-block">
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
