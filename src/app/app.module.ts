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
import { QuiErrorMessageService } from './inputs/services/qui-error-message.service';
import { CheckboxViewComponent } from './inputs/checkbox/checkboxView.component';
import { InputViewComponent } from './inputs/input_textarea/inputView.component';
import { QuiInputComponent } from './inputs/input_textarea/qui-input/qui-input.component';
import { QuiSelectComponent } from './inputs/select/qui-select/qui-select.component';
import { SelectViewComponent } from './inputs/select/selectView.component';
import { QuiCheckboxComponent } from './inputs/checkbox/qui-checkbox/qui-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    InputViewComponent,
    SelectViewComponent,
    CheckboxViewComponent,
    QuiInputComponent,
    QuiSelectComponent,
    QuiCheckboxComponent
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
