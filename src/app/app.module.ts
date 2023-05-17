import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListingComponent } from './pages/listing/listing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { ModifyComponent } from './pages/modify/modify.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyDM0qdnyp7EXP_Ax4XR0-FtAy52P9nSgr8",
    authDomain: "stockflow-62902.firebaseapp.com",
    databaseURL: "https://stockflow-62902-default-rtdb.firebaseio.com",
    projectId: "stockflow-62902",
    storageBucket: "stockflow-62902.appspot.com",
    messagingSenderId: "245886100906",
    appId: "1:245886100906:web:36603f5341cb538b8d37d3",
    measurementId: "G-WWTZCWTPC4"
  }) ,RouterModule.forRoot([
    {path: '',component: HomeComponent},
    {path: 'listing',component: ListingComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'modify',component: ModifyComponent},
    
  ])],
  
  declarations: [RootComponent, FooterComponent, MenuComponent, ListingComponent, RegisterComponent, HomeComponent, ModifyComponent],
  
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
