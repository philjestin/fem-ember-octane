import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;
  
  /**
   * @type {AuthService}
   */
  @service auth;

  get isDisabled () {
    return !this.userId;
  }

  loginAsUserWithId(val) {
    console.log('UserId ', val);      
  }

  /**
   * 
   * @param {Event & { target: HTMLSelectElement}} e 
   */
  @action
  onSelectChanged(e) {
    this.userId = e.target.value;
  }

  /**
   * 
   * @param {Event & { target: HTMLFontElement}} e 
   */
  @action
  onLoginFormSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const val = target.querySelector('select').value;
    this.auth.loginWithUserId(val);
  }
}
