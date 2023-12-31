import React from 'react';
import s from './ContactList.module.css';

export const ContactList = ({ contactFilter, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contactFilter().map(({ id, name, number }) => {
        return (
          <li className={s.contactItem} key={id}>
            <p className={s.contactText}>
              <b> {name} </b>: <i> {number}</i>
            </p>
            <button
              type="button"
              className={s.deleteBtn}
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
