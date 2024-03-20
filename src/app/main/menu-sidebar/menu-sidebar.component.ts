import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../core/guards/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImenuItems } from './helper';
import { SublevelMenuComponent } from './sublevel-menu.component';



export interface SidenavToggle{
  screenWidth: number;
  collapsed : boolean;
}
@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule,SublevelMenuComponent],

  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss'
})
export class MenuSidebarComponent implements OnInit{
  @Output() onToggleSidenav :EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed = true;
  multiple :boolean = false;
  public user: any = {};
  public menu = Menu;
  
  constructor(public auth:AuthService){}
  ngOnInit(): void {
    this.user = this.auth.currentUserValue;
    this.onToggleSidenav.emit({screenWidth: window.innerWidth, collapsed: this.collapsed});
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({screenWidth: window.innerWidth, collapsed: this.collapsed});
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({screenWidth: window.innerWidth, collapsed: this.collapsed});
  }
  handleClick(item: ImenuItems): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  shrinkItems(item: ImenuItems): void {
    if (!this.multiple) {
      for(let modelItem of this.menu) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}

export const Menu :ImenuItems[] = [
  {
    name: 'Dashboard',
    path: ['/'],
    icon: 'fal fa-home'
  },
  {
    name: 'Paramertrage/Generale',
    icon: 'fal fa-wrench',
    role:['ADMIN'],  
    children: [
      {
        name: 'Generale',
        icon: '',
        children: [
          {
            name: 'Produit',
            path: ['/parametrage/generale/produit'],
            icon: ''
          },
          {
            name: 'User',
            path: ['/parametrage/generale/user'],
            icon: ''
          },
        ]
      },
      {
      name: 'Station',
      path: ['/parametrage/station'],
      icon: ''
      },
    ]
  },
  
]