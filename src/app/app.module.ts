import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { AppRoutingModule } from './routing.module';
import { QuiDatepickerComponent } from './controls/qui-datepicker/qui-datepicker.component';
import { QuiAutoCompleteComponent } from './controls/qui-auto-complete/qui-auto-complete.component';
import { SelectViewComponent } from './views/select/select.component';
import { InputViewComponent } from './views/input/input.component';
import { TextareaViewComponent } from './views/textarea/textarea.component';
import { NumberViewComponent } from './views/number/number.component';
import { CheckboxViewComponent } from './views/checkbox/checkbox.component';
import { AutoCompleteViewComponent } from './views/auto-complete/auto-complete.component';
import { DatepickerViewComponent } from './views/datepicker/datepicker.component';
import { QuiErrorMessageService } from './controls/base/services/qui-error-message.service';
import { QuiInputComponent } from './controls/qui-input/qui-input.component';
import { QuiCheckboxComponent } from './controls/qui-checkbox/qui-checkbox.component';
import { QuiNumberComponent } from './controls/qui-number/qui-number.component';
import { QuiSelectComponent } from './controls/qui-select/qui-select.component';
import { QuiTextareaComponent } from './controls/qui-textarea/qui-textarea.component';
import { PasswordComponent } from './views/password/password.component';
import { QuiPasswordComponent } from './controls/qui-password/qui-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectViewComponent,
    InputViewComponent,
    TextareaViewComponent,
    NumberViewComponent,
    CheckboxViewComponent,
    AutoCompleteViewComponent,
    DatepickerViewComponent,
    PasswordComponent,

    QuiAutoCompleteComponent,
    QuiCheckboxComponent,
    QuiDatepickerComponent,
    QuiInputComponent,
    QuiNumberComponent,
    QuiSelectComponent,
    QuiTextareaComponent,
    QuiPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule, 
    MatButtonModule, 
    MatButtonToggleModule, 
    MatCardModule, 
    MatCheckboxModule, 
    MatChipsModule, 
    MatCommonModule, 
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule, 
    MatExpansionModule, 
    MatFormFieldModule, 
    MatGridListModule, 
    MatIconModule, 
    MatInputModule, 
    MatListModule, 
    MatMenuModule, 
    MatPaginatorModule,
    MatProgressBarModule, 
    MatProgressSpinnerModule, 
    MatRadioModule, 
    MatRippleModule, 
    MatSelectModule, 
    MatSidenavModule, 
    MatSlideToggleModule, 
    MatSliderModule, 
    MatSnackBarModule,
    MatSnackBarModule, 
    MatSortModule, 
    MatStepperModule, 
    MatTableModule, 
    MatTabsModule, 
    MatToolbarModule, 
    MatTooltipModule, 
    MatTreeModule,
    MatNativeDateModule,
  ],
  providers: [QuiErrorMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
