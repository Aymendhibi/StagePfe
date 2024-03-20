import {Component, Input, OnInit, Renderer2} from '@angular/core';
import { AppService } from '../core/services/app.service';
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';
import { MenuSidebarComponent, SidenavToggle } from './menu-sidebar/menu-sidebar.component';
import { CommonModule } from '@angular/common';





@Component({
    selector: 'main',
    standalone: true,
    providers: [
        AppService
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [RouterOutlet,HeaderComponent,MenuSidebarComponent,CommonModule]
})
export class MainComponent implements OnInit {


    constructor(private renderer: Renderer2) { }
    @Input() collapsed = false;
    @Input() screenWidth = 0;

    ngOnInit() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }

    onToggleSidenav(data:SidenavToggle) {
        this.screenWidth = data.screenWidth;
        this.collapsed = data.collapsed;
    }
    getBodyClass(): string {
        let styleClass = '';
        if (this.collapsed && this.screenWidth > 768) {
            styleClass='body-trimmed'
        }
        else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth >0) {
            styleClass = 'body-md-screen'
        }
        return styleClass;
    }
}
