import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {
	statusForm: FormGroup;
  content: FormControl;
	// status = {content: ''}

  constructor() { }

  ngOnInit(): void {
  	this.content = new FormControl("", [
  			        Validators.required,
  			        Validators.minLength(4),
  			        Validators.maxLength(280) 
  		     ])
    this.statusForm = new FormGroup({
        'content': this.content
    })
  }

  handleSubmit(event:any, statusDir:any, statusForm:any){
  	 	event.preventDefault()
  	  if (statusDir.submitted){
  		console.log(statusForm.value)

  		statusDir.resetForm({content: "some new content"})
  	}
  
  }

 //  get content(){
 // 	return this.statusForm.get("content")
 // }
}
