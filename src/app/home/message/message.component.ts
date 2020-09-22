import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../shared/message';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    messages:  any = [];
    displayedColumns = ['title', 'content'];
    @ViewChild(MatSort) sort: MatSort;
    searchKey: string;
    dataSource: MatTableDataSource<any>;
    filterText: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMessages();
    this.dataSource = new MatTableDataSource<Message>(this.messages);
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
    
  }

  getMessages() {
    this.messageService.getMessages()
        .subscribe(res => {
          this.messages = res;

        this.dataSource.data = this.messages;
        //  console.log(this.messageBoard);
      });
    }

  // applyFilter() {
  //   this.dataSource.filter = this.searchKey.trim().toLowerCase();
  // }
  
  applyFilter() {
    this.messages.filter = (data: Message, filter: string) => {
      return data.title == filter;
     };
     
  }
  
}

