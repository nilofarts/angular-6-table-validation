import { Component, OnInit } from '@angular/core';
import { Specification } from './specification';
import { SpecificationMasterService } from './specification-master.service';

@Component({
  selector: 'app-specification-master-crud',
  templateUrl: './specification-master-crud.component.html',
  styleUrls: ['./specification-master-crud.component.css']
})
export class SpecificationMasterCrudComponent implements OnInit {
  specificationList: Specification[];
  selectedIndex: number = 0; //for selection of row
  addRowFlag: boolean[] = new Array();
  edit: boolean; //to make input feild editable
  decimalPattern= "/^\d{0,2}\.?\d{0,2}$/g"; //for decimal

  constructor(private specificationMasterService: SpecificationMasterService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.specificationList = [];
    this.specificationMasterService.getSpecification().subscribe(data => {
      this.specificationList = data;
    })
  }
  onAdd() {
    var specificationObj = new Specification;
    this.specificationList.push(specificationObj);
    this.edit = true;
  }
  onClickSelectedRow(index: number) {
    this.selectedIndex = index;
  }


  onSave() {
    if ((this.specificationList[this.selectedIndex].id == undefined) && (this.specificationList[this.selectedIndex].id == null)) {
      this.specificationMasterService.saveSpecification(this.specificationList[this.selectedIndex]).subscribe(data => {
      console.log("Data save successfully");
      this.getData();
      })
    }
    else {
      this.onUpdate();
      console.log("data updated successfully")
    }
  }
  onUpdate() {
    this.specificationMasterService.updateSpecification(this.specificationList[this.selectedIndex]).subscribe(data => {
    console.log("data updated successfully");
    this.getData();
    })
    this.edit = true;
  }
  onEdit() {
    this.edit = true;
  }
  onDelete() {
    this.specificationMasterService.deleteSpecification(this.specificationList[this.selectedIndex].id).subscribe(response => {
    console.log("data deleted successfully");
    this.getData();
    })
  }



}
