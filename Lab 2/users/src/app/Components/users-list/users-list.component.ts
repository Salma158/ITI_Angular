import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: Array<any>;
  constructor() {
    this.users = [
      {
        profilePicture: '../../../assets/pics/pic1.jpg',
        username: 'user1',
        email: 'user1@example.com',
        phoneNumber: '123-456-7890',
        verified : true
      },
      {
        profilePicture: '../../../assets/pics/pic2.jpg',
        username: 'user2',
        email: 'user2@example.com',
        phoneNumber: '987-654-3210',
        verified : true
      }
      ,
      {
        profilePicture: '../../../assets/pics/pic3.jpg',
        username: 'user3',
        email: 'user3@example.com',
        phoneNumber: '987-654-5345',
        verified : false
      }
      ,
      {
        profilePicture: '../../../assets/pics/pic4.jpg',
        username: 'user4',
        email: 'user4@example.com',
        phoneNumber: '987-654-5365',
        verified : false
      }
      ,
      {
        profilePicture: '../../../assets/pics/pic5.jpg',
        username: 'user5',
        email: 'user5@example.com',
        phoneNumber: '987-654-3270',
        verified : true
      }
      ,
      {
        profilePicture: '../../../assets/pics/pic6.webp',
        username: 'user6',
        email: 'user6@example.com',
        phoneNumber: '987-654-3210',
        verified : false
      }
    ];
  }


}
