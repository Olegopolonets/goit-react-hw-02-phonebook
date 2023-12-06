import React from 'react';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.number) {
      if (this.props.checkName(this.state.name)) {
        alert(`${this.state.name} already in contact`);
      } else {
        this.props.addNewContact(this.state);
        this.reset();
      }
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    console.log('name', this.state.name);
    console.log('num', this.state.number);
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <input
            className={css.input}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            required
          />
        </label>
        <label htmlFor="number">
          <input
            className={css.input}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            required
          />
        </label>
        <button type="submit" className={css.button_contact}>
          Add contact
        </button>
      </form>
    );
  }
}
