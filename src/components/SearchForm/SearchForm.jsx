import { Form, Input, Button } from './SearchForm.styled';

const SearchForm = ({ handleSubmit }) => {
    return (
      
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        placeholder="Search movie"
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;