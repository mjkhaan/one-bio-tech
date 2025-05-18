import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form/contact-form.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactFormService: ContactFormService,
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      //this.toastr.success('Form has submitted successfully');
      this.contactFormService.sendContactDetails(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.contactForm.reset()
        },
        error: (error) => {
          //this.toastr.error(error.message);
        },
      });
    }
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

 
  get message() {
    return this.contactForm.get('message')!;
  }
}
