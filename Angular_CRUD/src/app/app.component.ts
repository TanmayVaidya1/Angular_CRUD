import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_CRUD';
  firstname="";
  lastname="";
  salary="";
  isEditBtnClicked=false;
  isUpdateBtnClicked=false;
  selectedIndex='';
  userList:any=[];
  submit(){
    let user={
      firstname:this.firstname,
      lastname:this.lastname,
      salary:this.salary
    }
    this.userList.push(user)
    this.clear() 
  }

  clear(){
    this.firstname="";
    this.lastname="";
    this.salary="";
  }

  delete(index:any){
    this.userList.splice(index,1);
  }

  edit(index:any){
    this.isEditBtnClicked=true;
    this.selectedIndex = index;
    this.firstname = this.userList[index].firstname;
    this.lastname = this.userList[index].lastname;
    //this.age = this.empList[index].age;
    this.salary = this.userList[index].salary;
  }

  update(){
    this.userList[this.selectedIndex].firstname =this.firstname;
    this.userList[this.selectedIndex].lastname =this.lastname;
    //this.empList[this.selectedIndex].age =this.age;
    this.userList[this.selectedIndex].salary =this.salary;
    this.clear()
    this.isEditBtnClicked=false;
  }

}
