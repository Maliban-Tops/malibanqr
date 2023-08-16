import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxKjuaModule } from "../../projects/ngx-kjua/src/lib/ngx-kjua.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Child
    NgxKjuaModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
