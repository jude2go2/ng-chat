import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddRoomComponent>) {}

  ngOnInit(): void {}

  public closeModal(): void {
    this.dialogRef.close();
  }
}
