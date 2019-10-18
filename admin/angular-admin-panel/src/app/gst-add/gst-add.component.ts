import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: PhonesService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      brand: ['', Validators.required ],
      date: ['', Validators.required ],
      os: ['', Validators.required ],
      uri: ['', Validators.required ]
    });
  }

  addPhones(title, brand, date, os, uri) {
    this.bs.addPhones(title, brand, date, os, uri);
  }

  ngOnInit() {
  }

}
