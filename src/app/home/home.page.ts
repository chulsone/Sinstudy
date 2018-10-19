import { Component } from '@angular/core';
import { UserService } from '../testService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ UserService ]
})
export class HomePage {

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  students: any = [];
  public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(
    private serviceTest: UserService
  ) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    console.log('start');
    const result = this.serviceTest.getTest();
    console.log(result);
    this.serviceTest.get_students_of_all().subscribe(
      (res)=>{
        console.log(res);
        this.students = res;
      }
    );
  }
}
