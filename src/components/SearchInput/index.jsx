import P from 'prop-types';
import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        onChange={handleChange}
        value={searchValue}
        placeholder="Type your search here..."
      />
    </div>
  );
};

SearchInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
