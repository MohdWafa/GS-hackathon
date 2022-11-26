import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit,AfterViewInit {
  @Input() questions:any;
  constructor(private emailService:EmailService,private router:Router) { }
  email:any;
  q:any = [];
  finish:boolean = false;
  selectedOption:any;
  shownObject:any;
  points:number = 0;
  ngOnInit(): void {
    for(let i = 0;i < this.questions.length; i++){
      this.q.push(this.questions[i].question);
      this.q.push(this.questions[i].info);
    }
    this.shownObject = this.q[0];
  }
  ngAfterViewInit(){
    this.shownObject = this.q[0];
    this.email = this.emailService.getEmail();
  }
  currentSlide = 0;



  onNextClick() {
    //console.log(document.getElementById('selectedOption'));
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.q.length ? this.q.length-1 : next;
    this.shownObject = this.q[this.currentSlide];
    console.log(this.selectedOption);
    if(this.selectedOption == true) this.points++;
  }

  onNextClickInfo() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.q.length ? this.q.length-1 : next;
    this.shownObject = this.q[this.currentSlide];
    this.selectedOption = null;
  }

  finishQuiz(){
    console.log(this.points,this.email);
    this.finish = true;
  }
  exitQuiz(){
    this.router.navigate(['home']);
  }
}
