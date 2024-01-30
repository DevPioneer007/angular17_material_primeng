import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-driller-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "one-driller-contact.component.html"
})
export class OneDrillerContactComponent {
  file = new FormControl('');

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.file.setValue(file ? file.name : '');
  }
}
