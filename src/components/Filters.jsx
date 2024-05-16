import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className=" bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name={'search'}
        size={'input-sm'}
      ></FormInput>
      {/* CATEGORIES */}
      <FormSelect
        label={'select category'}
        name={'category'}
        list={meta.categories}
        size={'select-sm'}
      ></FormSelect>
      {/* COMPANIES */}
      <FormSelect
        label={'select comapany'}
        name={'company'}
        list={meta.companies}
        size={'select-sm'}
      ></FormSelect>
      {/* ORDER */}{' '}
      <FormSelect
        label={'sort by'}
        name={'order'}
        list={['a-z', 'z-a', 'high', 'low']}
        size={'select-sm'}
      ></FormSelect>
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link
        to={'/products'}
        className="btn btn-accent btn-sm text-secondary-content"
      >
        Reset
      </Link>
    </Form>
  );
};
export default Filters;
