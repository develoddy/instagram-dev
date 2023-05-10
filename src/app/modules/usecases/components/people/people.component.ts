import { Component, OnInit } from '@angular/core';

export interface People {
  uid: string;
  username: string;
  fullname: string;
  profileImageURL: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    people: People[] = [];
    data = [
        {
          uid: '2h9C6J90nVchyZ587UTqK0vyYHxx1', 
          username: 'jerson.avalos', 
          fullname: 'Jerson Avalos', 
          profileImageURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          uid: '2h9C6J90nVchyZ587UTqK0vyYHxx2', 
          username: 'luis_08_92', 
          fullname: 'Joselyn Rojas', 
          profileImageURL: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
    ];
    constructor() {}

    ngOnInit() {
      this.people = [...this.data];
    }

}
