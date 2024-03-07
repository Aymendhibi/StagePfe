import { Component, OnInit } from '@angular/core';
import { MenuItemsComponent } from '../../components/menu-items/menu-items.component';
import { AuthService } from '../../core/guards/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [MenuItemsComponent,MenuItemsComponent,RouterModule,CommonModule],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss'
})
export class MenuSidebarComponent implements OnInit{
  
  public user: any = {};
  public menu = Menu;
  constructor(public auth:AuthService){}
  ngOnInit(): void {
      this.user = this.auth.currentUserValue;
  }
}

export const Menu = [
  {
    name: 'Dashboard',
    path: ['/home'],
    role:['admin'],
    icon: 'home'
  },
]