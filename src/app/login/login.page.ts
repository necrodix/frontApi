import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;
  procesandoAndo: boolean = false;
  private captchaPassed: boolean = false;
  private captchaResponse: string;

  constructor( private fb: FormBuilder, private routCtrl: Router,) { }

  
  CargarFormulario() {

    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.maxLength(150), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.maxLength(150)]]

    });

  }


  ngOnInit() {
    this.CargarFormulario();
  }


  autenticar(){

    this.routCtrl.navigateByUrl('tabs');
  }
  get emailNoValido() {
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched;
  }


  get passwordNoValido() {
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }



}
