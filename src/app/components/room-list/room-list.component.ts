import { Component, Input, OnInit } from '@angular/core';
import { IChatRoom } from 'src/app/models';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  @Input() rooms: Array<IChatRoom> = [];

  constructor() {}

  ngOnInit(): void {}
}
