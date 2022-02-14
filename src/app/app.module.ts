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
import { QuiInput2Component } from './input/qui-input2/qui-input2.component';
import { QuiInput5Component } from './input/qui-input5/qui-input5.component';
import { QuiInputComponent } from './input/qui-input/qui-input.component';
import { QuiSelectComponent } from './select/qui-select/qui-select.component';
import { QuiSelect2Component } from './select/qui-select2/qui-select2.component';
import { QuiSelect3Component } from './select/qui-select3/qui-select3.component';
import { InputViewComponent } from './input/inputView.component';
import { AppRoutingModule } from './routing.module';
import { SelectViewComponent } from './select/selectView.component';


@NgModule({
  declarations: [
    AppComponent,
    InputViewComponent,
    SelectViewComponent,
    QuiInputComponent,
    QuiInput2Component,
    QuiInput5Component,
    QuiSelectComponent,
    QuiSelect2Component,
    QuiSelect3Component
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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
