import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  angForm: FormGroup;
  phones: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: PhonesService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        title: ['', Validators.required ],
        brand: ['', Validators.required ],
        date: ['', Validators.required ],
        os: ['', Validators.required ],
        uri: ['', Validators.required ],
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editPhones(params['id']).subscribe(res => {
        this.phones = res;
      });
    });
  }

  updatePhones(title, brand, date, os, uri) {
   this.route.params.subscribe(params => {
      this.bs.updatePhones(title, brand, date, os, uri, params['id']);
      this.router.navigate(['phones']);
   });
}
}
