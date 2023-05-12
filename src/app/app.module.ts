import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ListingComponent } from './pages/listing/listing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([
    {path: '',component: HomeComponent},
    {path: 'delete',component: DeleteComponent},
    {path: 'listing',component: ListingComponent},
    {path: 'register',component: RegisterComponent},
    
  ])],
  
  declarations: [RootComponent, FooterComponent, MenuComponent, DeleteComponent, ListingComponent, RegisterComponent, HomeComponent],
  
  bootstrap: [RootComponent]
})
export class AppModule {}
