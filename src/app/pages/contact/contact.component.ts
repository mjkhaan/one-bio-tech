import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactFormService } from '../../services/contact-form/contact-form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactFormService: ContactFormService, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      companyName: [''],
      jobTitle: [''],
      message: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      // console.log('Form Submitted!', this.contactForm.value);
      // You can handle the form submission here, e.g., send it to a server
      this.contactFormService.sendContactDetails({...this.contactForm.value, productServiceInterest: []}).subscribe({
        next: (response) => {
          console.log('Form Submitted!', response);
          this.toastr.success('Form has submitted successfully');
          this.contactForm.reset();
        },
        error: (error) => {
          this.toastr.error(error.message);
        },
      });
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
  
  get fullName() {
    return this.contactForm.get('fullName')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber')!;
  }

  get companyName() {
    return this.contactForm.get('companyName')!;
  }

  get jobTitle() {
    return this.contactForm.get('jobTitle')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }
}
