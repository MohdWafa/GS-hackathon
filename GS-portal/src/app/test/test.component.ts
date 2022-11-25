import { Component, OnInit,AfterViewInit } from '@angular/core';
import { EmailService } from '../email.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit,AfterViewInit {
  email:string = "";
  constructor(private route:ActivatedRoute,private emailService: EmailService,private router:Router) { }
  ngAfterViewInit(): void {
    if(this.emailService.getEmail() == ""){
      alert("No email has been entered.");
      this.router.navigate(['home']);
    } else {
      this.email = this.emailService.getEmail();
      
    }
  }

  ngOnInit(): void {
  }

}
