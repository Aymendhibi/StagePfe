import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent implements OnInit {
    @Input() menuItem: any = null;
    @Input() enabled : any;
    public isExpandable: boolean = false;
    @HostBinding('class.nav-item') isNavItem: boolean = true;
    @HostBinding('class.menu-open') isMenuExtended: boolean = false;
    public isMainActive: boolean = false;
    public isOneOfChildrenActive: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {
        if (
            this.menuItem &&
            this.menuItem.children &&
            this.menuItem.children.length > 0
        ) {
            this.isExpandable = true;
        }
        this.calculateIsActive(this.router.url.replace('%C3%A9' , 'é'));
        this.router.events
            .pipe(filter((event:any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.calculateIsActive(event.url.replace('%C3%A9' , 'é'));
            });
    }

    public handleMainMenuAction() {
        if (this.isExpandable) {
            this.toggleMenu();
            return;
        }
        this.router.navigate(this.menuItem.path);
    }

    public toggleMenu() {
        this.isMenuExtended = !this.isMenuExtended;
    }

    public calculateIsActive(url: string) {
        
        this.isMainActive = false;
        this.isOneOfChildrenActive = false;
        if (this.isExpandable) {
            this.menuItem.children.forEach((item:any) => {
                if (item.path[0] === url) {
                    this.isOneOfChildrenActive = true;
                    this.isMenuExtended = true;
                }
            });
        } else if (this.menuItem.path[0] === url) {
            this.isMainActive = true;
        }
        if (!this.isMainActive && !this.isOneOfChildrenActive) {
            this.isMenuExtended = false;
        }
    }
}
