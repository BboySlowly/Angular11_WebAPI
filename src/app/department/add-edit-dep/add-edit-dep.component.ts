import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowDepComponent } from 'src/app/department/show-dep/show-dep.component';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService, private showdep: ShowDepComponent) { }

  @Input() dep: any;
  DepartmentId: string = "";
  DepartmentName: string = "";

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    var val = { DepartmentId: this.DepartmentId, DepartmentName: this.DepartmentName };
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
      this.showdep.refreshDepList();
    });
  }

  updateDepartment() {
    var val = { DepartmentId: this.DepartmentId, DepartmentName: this.DepartmentName };
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
      this.showdep.refreshDepList();
    });
  }

}
