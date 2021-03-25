import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
const ELEMENT_DATA: userData[] = [
  {
    "name": "Hydrogen",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Helium",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Lithium",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Beryllium",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Boron",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Carbon",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Nitrogen",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Oxygen",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Fluorine",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  },
  {
    "name": "Neon",
    "email": "abc@xyz.com",
    "gender": "M",
    "address": "tidke colony",
    "birthdate": "01/04/1995"
  }
];
// import  data =  require('./configuration.json');
export interface userData {
  name: string;
  email: string;
  gender: string;
  address: string;
  birthdate: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'gender', 'address', 'birthdate', 'edit', 'delete'];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  checked: any;
  // userdata: any = (data as any).default;
  // jsonContent = JSON.parse(this.userdata);
  dataSource = new MatTableDataSource<userData>(ELEMENT_DATA);
  constructor() {
    // console.log('userdata from configuraton:', this.userdata);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  openDeleteDialog() {

  }
}
