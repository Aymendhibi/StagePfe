import { Component } from '@angular/core';
import {DateTime} from 'luxon';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public appVersion = packageInfo.version;
    public currentYear: string = DateTime.now().toFormat('y');
}
