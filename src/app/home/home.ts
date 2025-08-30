import { Component } from '@angular/core';
import { Sidebar } from "../Components/sidebar/sidebar";
import { Chat } from "../Components/chat/chat";

@Component({
  selector: 'app-home',
  imports: [Sidebar, Chat],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
