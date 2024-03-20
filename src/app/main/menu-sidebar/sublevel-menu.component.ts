import { Component, Input, OnInit } from '@angular/core';
import { ImenuItems } from './helper';
import {animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  template: `
    <ul *ngIf="collapsed && menu.children && menu.children.length > 0"
    [@submenu]="menu.expanded
    ? {value : 'visible',params : {transitionParams: '400ms cubic-bezier(0.86, 0 ,0.07 ,1)',height: '*'}}
    : { value :'hidden' ,params : {transitionParams: '400ms cubic-bezier(0.86, 0 ,0.07 ,1)',height: '0'}}"
    class="sublevel-nav"
    >
      <li *ngFor="let item of menu.children" class="sublevel-nav-item">
      <a class="sublevel-nav-link"
      (click)="handleClick(item)"
      *ngIf="item.children && item.children.length > 0">
        <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" *ngIf="collapsed">{{item.name}}</span>
        <i *ngIf="item.children && collapsed" class="menu-collapse-icon"
        [ngClass]="!item.expanded ? 'fal fa-angle-right' :'fal fa-angle-down'"
        ></i>
      </a>
      <a class="sublevel-nav-link"
      *ngIf="!item.children || ( item.children && item.children.length === 0)"
      [routerLink]="item.path"
      [routerLinkActive] = "'active-sublevel'"
      [routerLinkActiveOptions] = "{exact:true}"
      >
      <i class="sublevel-link-icon fa fa-circle"></i>
      <span class="sublevel-link-text" *ngIf="collapsed">{{item.name}}</span>
      </a>
      <div *ngIf="item.children && item.children.length > 0 ">
        <app-sublevel-menu
        [menu]="item"
        [collapsed]="collapsed"
        [multiple]="multiple"
        [expanded]="item.expanded"
        ></app-sublevel-menu>
      </div>
      </li>
    </ul>
  `,
  styleUrl: './menu-sidebar.component.scss',
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}), 
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {
  @Input() menu: ImenuItems = {
    name: '',
    path:[''],
    icon: '',
    role: [''],
    children: []
  };
  @Input() collapsed = false;
  @Input() animate: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item:ImenuItems): void{
    if (!this.multiple) {
      if (this.menu.children && this.menu.children.length > 0) {
        for (let modelItem of this.menu.children){
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = true;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
