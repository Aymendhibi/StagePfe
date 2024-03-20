import { Component, Input, inject, input } from '@angular/core';
import { AuthService } from './../../core/guards/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OverlayModule} from '@angular/cdk/overlay';
import { CdkMenuModule} from '@angular/cdk/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,OverlayModule,CdkMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  userItems = userItems;
  authService = inject(AuthService);
  router = inject(Router)
  logOut() {
    this.authService.removeToken();
    this.router.navigate(['login'])
  }
  
  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed'
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth >0) {
            styleClass = 'head-md-screen'
        }
    return styleClass
  }
}

export const userItems = [
  {
    name: 'Profile',
    icon: 'far fa-user'
  },
  {
    name: 'Settings',
    icon: 'far fa-cog'
  },
  {
    name: 'Log Out',
    click: 'logOut()',
    icon: 'far fa-power-off'
  },
]