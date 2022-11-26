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
  public questions = [{
    "question": {
            text: "Which technology does Goldman sachs use?",
            options: [
            {
              text: "Apex",
              value: false
            },
            {
              text: "SASL",
              value: false
            },
            {
              text: "C",
              value: false
            },
            {
              text: "React",
              value: true
            }
            ]
        },
        info:"The firm uses Java, React, Python, C++ and many more programming languages. Fun fact: Slang is our unique programming language, its proprietary single-threaded language that precedes the invention of Python."
        },
        {
    "question": {
            text: "What is one of the Goldman Sachs core value?",
            options: [
            {
              text: "Evolve constantly",
              value: false
            },
            {
              text: "Deliver Excellence",
              value: false
            },
            {
              text: "Impeccable Client Services",
              value: true
            },
            {
              text: "Global forwarding",
              value: false
            }
            ]
        },
        info:"Our purpose comes to life through our four core values: Client Service, Excellence, Integrity, and Partnership."
        },
        {
    "question": {
            text: "What does Goldman Sachs do?",
            options: [
            {
              text: "Trade Gold",
              value: false
            },
            {
              text: "Market Making",
              value: true
            },
            {
              text: "Mine Gold",
              value: false
            },
            {
              text: "Forex trading",
              value: false
            }
            ]
        },
        info:"We provide the following services: Private Wealth Management, Proprietary Trading, IPO deals and bond offerings, Mergers & Acquisitions, Market Making"
        },
        {
    "question": {
            text: "Office Locations of Goldman Sachs",
            options: [
              {
                text: "Singapore",
                value: true
              },
            {
              text: "Kuwait",
              value: false
            },
            {
              text: "Slovakia",
              value: false
            },
            {
              text: "Serbia",
              value: false
            }
            ]
        },
        info:"We are located in the following countries: Argentina, Australia, Brazil, Canada, France, Germany, China, Greece, India, Indonesia, Ireland, Israel, Italy, Korea, Mexico, New Zealand, Poland, United Arab Emirates"
        }
    ];
  constructor(private route:ActivatedRoute,private emailService: EmailService,private router:Router) { }
  ngAfterViewInit(): void {
    // if(this.emailService.getEmail() == ""){
    //   alert("No email has been entered.");
    //   this.router.navigate(['home']);
    // } else {
      this.email = this.emailService.getEmail();
      //console.log(this.questions)
    //}
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/api/tasks/getAll'
    // }).then(apiResponse => {
    //    console.log(apiResponse);
    // })
  }

  ngOnInit(): void {
  }

}
