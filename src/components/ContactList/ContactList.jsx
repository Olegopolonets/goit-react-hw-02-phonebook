import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contactFilter, deleteContact }) => {
  return (
    <ul className={css.contact_list}>
      {contactFilter().map(({ id, name, number }) => {
        return (
          <li className={css.contact_item} key={id}>
            {name}: {number}
            <button
              type="button"
              className={css.delete_button}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
