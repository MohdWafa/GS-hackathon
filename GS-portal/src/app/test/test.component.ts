import { Component, OnInit,AfterViewInit } from '@angular/core';
import { EmailService } from '../email.service';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit,AfterViewInit {
  email:string = "";
  // public questions = [
  //   { question: {text : "test question 1?",options:[{text:"option 11",value: true},{text:"option 21",value:false}]}, info: "info text 1!"},
  //   { question: {text : "test question 2?",options:[{text:"option 12",value: true},{text:"option 22",value:false}]}, info: "info text 2!"},
  //   { question: {text : "test question 3?",options:[{text:"option 13",value: true},{text:"option 23",value:false}]}, info: "info text 3!"},
  //   { question: {text : "test question 4?",options:[{text:"option 14",value: true},{text:"option 24",value:false}]}, info: "info text 4!"},
  //   { question: {text : "test question 5?",options:[{text:"option 15",value: true},{text:"option 25",value:false}]}, info: "info text 5!"},
  //];
  questions:any;
  constructor(private route:ActivatedRoute,private emailService: EmailService,private router:Router) { }
  ngAfterViewInit(): void {
    // if(this.emailService.getEmail() == ""){
    //   alert("No email has been entered.");
    //   this.router.navigate(['home']);
    // } else {
      this.email = this.emailService.getEmail();
      //console.log(this.questions)
    //}
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/tasks/getAll'
    }).then(apiResponse => {
       console.log(apiResponse);
    })
  }

  ngOnInit(): void {
  }

}
