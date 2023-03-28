import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RouterModule, Route } from "@angular/router";

import { ScrollService } from "../_services/scroll.service";

const routes = <Route[]>[];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule {}
