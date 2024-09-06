import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @ViewChildren('formField') formFields: QueryList<ElementRef>;

  form:FormGroup=this.fb.group({
    name:['',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    message:['',Validators.required]
  })

  constructor(private fb:FormBuilder,    private messageService: MessageService){

  }

  focusFirstUnfilledField() {
    for (let i = 0; i < this.formFields.length; i++) {
      const field = this.formFields.toArray()[i];
      if (!field.nativeElement.value) {
        field.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        field.nativeElement.focus();
        break;
      }
    }
  }

  get f() {
    return this.form.controls;
  }

  sucess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'I will reach out to you asap!',
    });
  }
  error(message) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  submit(){
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.focusFirstUnfilledField();
      return;
    }
   this.sucess()
  }

} 
