import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @ViewChild('loginModal') loginModal;
  public loginForm: FormGroup;

  validatorOptions = {
    excluded: ':disabled',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        validators: {
          notEmpty: {
            message: 'Please enter a username'
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: 'Please enter a password'
          }
        }
      }
    }
  };

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  showLoginForm() {
    this.loginModal.show();
  }

  login() {
    console.log("Errors Required: ", this.loginForm.controls.username.errors.required);
    console.log("Dirty: ", this.loginForm.controls.username.dirty);
    if(this.loginForm.status === 'VALID') {
      let username = this.loginForm.get('username').value;
      let password = this.loginForm.get('password').value;
      firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Error Code: ", errorCode);
        console.log("Error Message: ", errorMessage);
      });
    }
  }
}
