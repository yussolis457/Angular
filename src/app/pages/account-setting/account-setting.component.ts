import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

 

  constructor(private st:SettingsService) { }

  ngOnInit(): void {
this.st.checkCurrentTheme();

  }

  changeTheme(theme:string){
    this.st.changeTheme(theme);

  }
  

}
