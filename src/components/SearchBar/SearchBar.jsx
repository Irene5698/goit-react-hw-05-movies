import { useState } from 'react';
import css from 'components/SearchBar/SearchBar.module.css';

export const Searchbar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleNameCange = evn => {
    setName(evn.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Input your request pleace');
      return;
    }

    onSearch(name);
    setName('');
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleNameCange}
          value={name}
        />
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonText}>Search</span>
        </button>
      </form>
    </header>
  );
};
