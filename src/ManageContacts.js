import * as validations from './Validations';
import Button from './Components/Button';
import Input from './Components/Input';
import Contacts from './Components/Contacts';
import Search from './Components/Search';
import React, { Component } from 'react';

class ManageContacts extends Component {

  constructor() {
    super();

    this.state = {
      firstName: { ...this.createInputOptions('First Name', 'text', validations.IS_REQUIRED, { required: true }) },
      email: { ...this.createInputOptions('Email', 'email', validations.INVALID_EMAIL, { required: true, isEmail: true }) },
      lastName: { ...this.createInputOptions('Last Page', 'text', validations.IS_REQUIRED, { required: true }) },
      personList: [],
      search: ''
    };
  }

  createInputOptions = (label, type, validationMessage, validations) => {
    return {
      label,
      touched: false,
      type,
      valid: false,
      validationMessage,
      validations: { ...validations },
      value: ''
    }
  };

  resetInputOptions = () => {
    return {
      touched: false,
      valid: false,
      value: ''
    }
  }

  checkValidity = (value, rules) => {
    let isValid = true;
    const { isEmail, required } = rules;

    if (!rules) return true;

    if (required) {
      isValid = validations.isEmpty(value);
    }

    if (isEmail) {
      isValid = validations.isRegex(value, validations.EMAIL_REGEX);
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentfier) => {
    let updatedInputIdentfier = { ...this.state[inputIdentfier] };
    updatedInputIdentfier.value = event.target.value;
    updatedInputIdentfier.valid = this.checkValidity(event.target.value, updatedInputIdentfier.validations);
    this.setState({ [inputIdentfier]: updatedInputIdentfier });
  };

  searchHandler = (event) => {
    this.setState({ search: event.target.value });
  }

  removeHandler = (removePerson) => {
    const newList = this.state.personList.filter(person => person.id !== removePerson.id);
    this.setState({ personList: newList })
  }

  onSubmitHandler = () => {
    let validFormInputs = [],
      isFormValid = false;

    const validInputs = (({ personList, search, ...o }) => o)(this.state)
    for (let key in validInputs) {
      let updatedInputIdentfier = { ...this.state[key] };
      updatedInputIdentfier.touched = true;
      validFormInputs = [...validFormInputs, this.state[key].valid];
      this.setState({ [key]: updatedInputIdentfier });
    }

    isFormValid = validFormInputs.every(entry => entry);
    if (isFormValid) {
      let newList = this.state.personList;
      newList = [{ firstname: this.state.firstName.value, lastname: this.state.lastName.value, email: this.state.email.value, id: Date.now() }].concat(newList)
      this.setState({
        firstName: { ...this.state.firstName, ...this.resetInputOptions() },
        email: { ...this.state.email, ...this.resetInputOptions() },
        lastName: { ...this.state.lastName, ...this.resetInputOptions() },
        personList: newList
      })
      alert('Contact Added!');
    }

  };

  render() {
    return (
      <>
        <Search changed={(event) => this.searchHandler(event)} />
        <div className='form'>
          <h3>Add Contacts</h3>
          <Input
            changed={(event) => this.inputChangedHandler(event, 'firstName')}
            {...this.state['firstName']} />

          <Input
            changed={(event) => this.inputChangedHandler(event, 'lastName')}
            {...this.state['lastName']} />

          <Input
            changed={(event) => this.inputChangedHandler(event, 'email')}
            {...this.state['email']} />

          <Button text="Create" clicked={this.onSubmitHandler} />
        </div>
        <hr/>
        <div className='container'>
          <div className='row'>
          <Contacts persons={this.state.personList} term={this.state.search} remove={this.removeHandler} />
          </div>
        </div>
      </>
    )
  };
};

export default ManageContacts;