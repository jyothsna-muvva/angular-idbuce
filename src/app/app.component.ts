import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  // array = ['HTML', 'CSS', 'Angular', 'React', 'JS'];
  // clickButton;
  // onClick() {
  //   this.clickButton = 'HTML';
  // }
  taskList = [
    { taskName: 'Task 1', status: 'new' },
    { taskName: 'Task 2', status: 'new' },
    { taskName: 'Task 3', status: 'new' },
    { taskName: 'Task 4', status: 'new' },
    { taskName: 'Task 5', status: 'new' },
    { taskName: 'Task 6', status: 'new' },
  ];

  updateStatus(task) {
    task.status =
      task.status === 'new'
        ? 'ongoing'
        : task.status === 'ongoing'
        ? 'done'
        : '';
  }
}
