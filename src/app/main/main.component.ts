import {Component, HostBinding, OnInit, Renderer2} from '@angular/core';
import { AppService } from '../core/services/app.service';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'main',
    standalone: true,
    providers: [
        AppService
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [RouterOutlet,FooterComponent,HeaderComponent]
})
export class MainComponent implements OnInit {
    @HostBinding('class') class = 'wrapper';
    public sidebarMenuOpened = true;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }

    toggleMenuSidebar() {
        if (this.sidebarMenuOpened) {
            this.renderer.removeClass(
                document.querySelector('app-root'),
                'sidebar-open'
            );
            this.renderer.addClass(
                document.querySelector('app-root'),
                'sidebar-collapse'
            );
            this.sidebarMenuOpened = false;
        } else {
            this.renderer.removeClass(
                document.querySelector('app-root'),
                'sidebar-collapse'
            );
            this.renderer.addClass(
                document.querySelector('app-root'),
                'sidebar-open'
            );
            this.sidebarMenuOpened = true;
        }
    }
}
