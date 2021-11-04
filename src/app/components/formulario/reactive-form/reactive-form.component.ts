import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public profileForm = this.fb.group({
    email: ['', Validators.required],
    password: [''],
    address: [''],
    address2: [''],
    city: [''],
    state: [''],
    check: ['']
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

}
