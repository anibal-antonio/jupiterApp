import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    FormComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PagesModule { }
