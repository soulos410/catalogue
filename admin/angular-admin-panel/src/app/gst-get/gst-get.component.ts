import { Component, OnInit } from '@angular/core';
import Phones from '../Phones';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  phones: Phones[];

  constructor(private bs: PhonesService) { }

  ngOnInit() {
    this.bs
      .getPhones()
      .subscribe((data: Phones[]) => {
        this.phones = data;
    });
  }

  deletePhones(id) {
    this.bs.deletePhones(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
