import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuiErrorMessagesService {

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

export const DefaultErrorForValidator = [
  "required",
  "email",
  "max",
  "maxlength",
  "min",
  "minlength"

];

export class ErrorMessage {
  constructor(
    public forValidator: string,
    public defaultMessage: string,
    public translationKey: string | null = null,
  ) { }
}