import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, CloseBtn } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      {name}:{number}
      <CloseBtn type="button" onClick={handleDelete}>
        Delete
      </CloseBtn>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
