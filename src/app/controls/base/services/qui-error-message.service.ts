import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuiErrorMessageService {

  private errorMessages: ErrorMessage[] = [];

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

export enum DefaultErrorForValidator {
  Required = "required",
  Email = "email",
  Max = "max",
  Maxlength = "maxlength",
  Min = "min",
  Minlength = "minlength"
}


export class ErrorMessage {
  constructor(
    public forValidator: string,
    public defaultMessage: string,
    public translationKey: string = "",
  ) { }
}