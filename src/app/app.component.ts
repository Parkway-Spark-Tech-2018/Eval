import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public href: string = "";
  public show_style: boolean = true;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.href = location.path();
      } else {
        this.href = 'Home';
      }
      console.log('HREF: ' + this.href);

      if (this.href === 'Home')
      {
        this.show_style = false;
        console.log('Show style = ' + this.show_style)
      }
      else {
        this.show_style = true;
      }
      console.log('Show style = ' + this.show_style)

    });
  }

  ngOnInit() {
    //this.href = this.router.url;
    if (this.href === 'Home')
    {
      this.show_style = false;
    }
    else {
      this.show_style = true;
    }
    console.log('Show style = ' + this.show_style)
  }
}
