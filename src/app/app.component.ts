import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transalteLoader';
  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;

  constructor(private translate:TranslateService){
    translate.addLangs(['en', 'ge']);
   
  }

  ngOnInit() {
    // hardcoded example
    this.user = { firstName: 'Sammy', lastName: 'Shark' };
  }

  submit(language:string){
    this.translate.use(language);

  }
}
