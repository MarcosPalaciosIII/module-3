import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  contacts: any[] = [
    {
      id: 5,
      name: "Jose Jones",
      phone: '555-555-5555'
    },
    {
      id: 10,
      name: "Mary Martinez",
      phone: '777-777-7777'
    },
    {
      id: 15,
      name: "Bianca Bright",
      phone: '999-999-9999'
    },
  ];

  constructor() { }

  addContact(theContact: any) {
    const lastIndex = this.contacts.length - 1;
    const lastContact = this.contacts[lastIndex];

    // give the new contact a unique ID (last contact's ID + 1)
    theContact.id = lastContact.id + 1;

    this.contacts.push(theContact);

    console.log(this.contacts);
  }

  deleteContact(contactId: number) {
    let contactIndex;

    this.contacts.forEach((oneContact, index) => {
      if (oneContact.id === contactId) {
        contactIndex = index;
      }
    });

    this.contacts.splice(contactIndex, 1);
  }

  getContact(contactId: number|string) {
    contactId = Number(contactId);

    let contactInfo;

    this.contacts.forEach((oneContact) => {
      if (oneContact.id === contactId) {
        contactInfo = oneContact;
      }
    });
    return contactInfo;

    // PRO WAY
    // return this.contacts.find(oneContact => oneCtonact.id === contactId);
  }

}
