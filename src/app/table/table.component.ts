import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  details = [
    {
      'name' : 'John Doe',
      'date' : 'July 20th, 2018',
      'client' : 'Oberio Group of Hotels',
      'pmp' : 'Mahmud Reitelli',
      'title' : 'C level',
      'vertical' : 'Marketing',
      'ml' : 'Goto meeting',
      'poi' : 'Understand their current ecosystem.',
      'oar' : 'Send first cut of proposed solution',
      'es' : 'Needs defined'
    },
    {
      'name' : 'Ethan Hunt',
      'date' : 'July 20th, 2018',
      'client' : 'taj Group of Hotels',
      'pmp' : 'Avie Peasegood',
      'title' : 'C level',
      'vertical' : 'Sales',
      'ml' : 'Video',
      'poi' : 'Demo the product',
      'oar' : 'She will get back with avilability for next meeting.',
      'es' : 'Contact made'
    },
    {
      'name' : 'John Doe',
      'date' : 'July 20th, 2018',
      'client' : 'Accenture',
      'pmp' : 'Dew Tilbrey',
      'title' : 'C level',
      'vertical' : 'Senior Management',
      'ml' : 'Face to face',
      'poi' : 'Negotiations',
      'oar' : 'He needs to get final approval by the board. Will happen by today EOD.',
      'es' : 'Negotiations started'
    },
    {
      'name' : 'Julia Cruise',
      'date' : 'July 20th, 2018',
      'client' : 'Google',
      'pmp' : 'Jerri Casswell',
      'title' : 'Sr Manager level',
      'vertical' : 'Technology',
      'ml' : 'Call',
      'poi' : 'Introductory call',
      'oar' : 'Need to send them a reminder tomorrow to fix metting with the Saled Head.',
      'es' : 'Contact made'
    },
    {
      'name' : 'Tom Roberts',
      'date' : 'July 20th, 2018',
      'client' : 'Microsoft',
      'pmp' : 'Dannye Halms',
      'title' : 'VP level',
      'vertical' : 'Seior Management',
      'ml' : 'Email',
      'poi' : 'Confirm final meeting with CEO for pricing negotiation.',
      'oar' : 'Meeting confirmed for tomorrow.',
      'es' : 'Negotiations started'
    },
    {
      'name' : 'John Doe',
      'date' : 'July 21st, 2018',
      'client' : 'Oberio Group of Hotels',
      'pmp' : 'Mahmud Ritelli',
      'title' : 'C level',
      'vertical' : 'Marketing',
      'ml' : 'Face to face',
      'poi' : 'Propose our solution',
      'oar' : 'Send them an updated proposal based on their feedback by next week',
      'es' : 'Needs defined'
    },
    {
      'name' : 'Ethan Hunt',
      'date' : 'July 21st, 2018',
      'client' : 'Taj Group of Hotels',
      'pmp' : 'Avie Peasegood',
      'title' : 'C level',
      'vertical' : 'Sales',
      'ml' : 'Call',
      'poi' : 'Fix up next meeting',
      'oar' : 'She has to fly out of country urgently. Will get back with availability once back.',
      'es' : 'Contact made'
    },
    {
      'name' : 'John Doe',
      'date' : 'July 21st, 2018',
      'client' : 'Accenture',
      'pmp' : 'Dew Tilbey',
      'title' : 'C level',
      'vertical' : 'Senior Mangement',
      'ml' : 'Face to face',
      'poi' : 'Deal signing',
      'oar' : 'Deal closed',
      'es' : 'Won'
    },
    {
      'name' : 'Julia Cruise',
      'date' : 'July 21st, 2018',
      'client' : 'Google',
      'pmp' : 'Jerri Casswell',
      'title' : 'Sr Manager level',
      'vertical' : 'Technology',
      'ml' : 'Text',
      'poi' : 'Fix up mext meeting with Sales Head',
      'oar' : 'Scheduled for next week.',
      'es' : 'Contact made'
    },
    {
      'name' : 'Tom Roberts',
      'date' : 'July 21st, 2018',
      'client' : 'Microsoft',
      'pmp' : 'Dannye Halms',
      'title' : 'VP level',
      'vertical' : 'Seior Management',
      'ml' : 'Face to face',
      'poi' : 'Finalize negotiation.',
      'oar' : 'Deal lost',
      'es' : 'Lost'
    }
  ]


  ngOnInit(): void {
  }

}
