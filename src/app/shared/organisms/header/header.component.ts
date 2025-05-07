import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
color: string|undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                style: {
                    color: "red"
                },
                routerLink: '/'
            },
            {
                label: 'Platforms',
                icon: 'pi pi-star',
                routerLink: 'platforms'
            },
            {
                label: 'Download',
                icon: 'pi pi-envelope',
                routerLink: 'download'
            }
        ]
    }
}
