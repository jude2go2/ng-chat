import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IChatRoom, IMessage } from 'src/app/models';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public rooms$: Observable<Array<IChatRoom>>;
  public messages$: Observable<Array<IMessage>>;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.rooms$ = this.chatService.getRooms();

    const roomId: string = activatedRoute.snapshot.url[1].path;

    this.messages$ = this.chatService.getRoomMessages(roomId);
    console.log('room id', roomId);

    this.subscription.add(
      router.events
        .pipe(filter((data) => data instanceof NavigationEnd))
        .subscribe((data) => {
          const routeEvent: RouterEvent = <RouterEvent>data;
          const urlArr = routeEvent.url.split('/');
          if (urlArr.length > 2) {
            this.messages$ = this.chatService.getRoomMessages(urlArr[2]);
          }
        })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
