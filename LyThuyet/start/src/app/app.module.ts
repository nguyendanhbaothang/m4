import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { CClaasComponent } from './c-claas/c-claas.component';
import { PetComponent } from './pet/pet.component';
import { ProductComponent } from './product/product.component';
import { DEventComponent } from './d-event/d-event.component';
import { ETwoWayComponent } from './e-two-way/e-two-way.component';
import { CustomPipe } from './custom.pipe';
import { FPipesComponent } from './f-pipes/f-pipes.component';
import { MTemplateVariableComponent } from './m-template-variable/m-template-variable.component';
import { GNgIfComponent } from './g-ng-if/g-ng-if.component';
import { HNgForComponent } from './h-ng-for/h-ng-for.component';
import { INgSwitchComponent } from './i-ng-switch/i-ng-switch.component';
import { JNgClassComponent } from './j-ng-class/j-ng-class.component';
import { KNgStyleComponent } from './k-ng-style/k-ng-style.component';
import { NInputComponent } from './n-input/n-input.component';
import { OOuputComponent } from './o-ouput/o-ouput.component';
import { UTemplateDrivenComponent } from './u-template-driven/u-template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    BPropertyComponent,
    CClaasComponent,
    PetComponent,
    ProductComponent,
    DEventComponent,
    ETwoWayComponent,
    CustomPipe,
    FPipesComponent,
    MTemplateVariableComponent,
    GNgIfComponent,
    HNgForComponent,
    INgSwitchComponent,
    JNgClassComponent,
    KNgStyleComponent,
    NInputComponent,
    OOuputComponent,
    UTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
