import { Component, OnInit } from '@angular/core';
import { UserService } from '../services-dependency-injection-assignment/users.service';

@Component({
  selector: 'app-services-dependency-injection-assignment',
  templateUrl: './services-dependency-injection-assignment.component.html',
  styleUrls: ['./services-dependency-injection-assignment.component.css'],
  providers: [UserService]
})
export class ServicesDependencyInjectionAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
