import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() messages: Array<IMessage> = [];

  constructor() {}

  ngOnInit(): void {
    console.log('MESSAGESSSS: ', this.messages);
  }
}
