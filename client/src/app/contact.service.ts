import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contacts';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  /* Retrieving Contacts */
  getContacts() {
    return this.http.get('http://locahost:3000/api/contacts/')
    .map(res => res.json());
  }

  /* Adding Contacts */
  addContacts(newContact) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://locahost:3000/api/contact/', newContact, {headers:headers})
    .map(res => res.json());
  }

  /* Deleting Contact */
  deleteContact(id) {
    return this.http.delete('http://localhost:3000/api/contact/' + id)
    .map(res => res.json());
  }

}
