import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PartEditorComponent} from "./parts/part-editor/part-editor.component";
import {PartRepository} from "./parts/part.repository";
import {PartManagerComponent} from "./parts/part-manager/part-manager.component";

@NgModule({
    declarations: [
        AppComponent,
        PartEditorComponent,
        PartManagerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [PartRepository],
    bootstrap: [AppComponent]
})
export class AppModule {
}
