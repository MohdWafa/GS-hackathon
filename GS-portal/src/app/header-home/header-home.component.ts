import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  email:string = '';
  constructor(private emailService : EmailService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  submitEmail(){
    if(this.email != '') {
      //alert(this.email);
      this.emailService.setEmail(this.email);
      this.router.navigate(['test']);
    } else {
      alert("Please enter email before continuing.");
    }
  }

}
