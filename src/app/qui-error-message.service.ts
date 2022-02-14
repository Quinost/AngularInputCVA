import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuiErrorMessageService {

  private errorMessages: ErrorMessage[] = [];

  public defaultForValidators: "required" | "email" | "max" | "maxlength" | "min" | "minlength" = "required";

  public get getErrorMessages(): ErrorMessage[] {
    return this.errorMessages;
  }
  
  public addMessage(message: ErrorMessage){
    this.errorMessages.push(message);
  }

  public translateMethod: TranslationService | null = null;

  public configureTranslationService(translationService: TranslationService){
    this.translateMethod = translationService;
  }
}

export interface TranslationService{
  (translationKey: string): string;
}


export class ErrorMessage {
  constructor(
    public forValidator: string,
    public defaultMessage: string,
    public translationKey: string
  ) { }
}