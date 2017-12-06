import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactDeets: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private contactThang: ContactService
    ) { }

  ngOnInit() {
    // get the URL parameters when the component loads
    this.activatedThang.params.subscribe((myReqParams) => {
      // { path: "contacts/contactId" }
      console.log(myReqParams.id)

      // use the ID from the URL to get the contact details from the service
      this.contactDeets = this.contactThang.getContact(myReqParams.id);
    });
  } // ngOnInit()

}
