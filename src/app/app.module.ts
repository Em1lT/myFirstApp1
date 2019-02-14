import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MediaProvider } from '../providers/media/media';
import { profilePage } from '../pages/profile/profile';
import { LoginRegisterPage } from '../pages/login-register/login-register';
import { MenuPage } from '../pages/menu/menu';
import { PipesModule } from '../pipes/pipes.module';
import { UploadPage } from '../pages/upload/upload';
import { Chooser } from '@ionic-native/chooser';
import { PlayerPage } from '../pages/player/player';
import { MyFilesPage } from '../pages/my-files/my-files';
import { ModifyPage } from '../pages/modify/modify';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    profilePage,
    LoginRegisterPage,
    MenuPage,
    UploadPage,
    PlayerPage,
    MyFilesPage,
    ModifyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    profilePage,
    LoginRegisterPage,
    MenuPage,
    UploadPage,
    PlayerPage,
    MyFilesPage,
    ModifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider,
    PipesModule,
    Chooser
  ]
})
export class AppModule {}
