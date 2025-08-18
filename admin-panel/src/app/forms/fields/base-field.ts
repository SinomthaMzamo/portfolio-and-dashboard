import { Input, Directive } from '@angular/core';

@Directive() // Angular allows base classes to be abstract components via Directive
export abstract class BaseField {
  @Input({required:true}) label!: string;
  @Input({required:true}) id!: string;
  @Input({required:true}) name!: string;
  @Input() placeholder?:string;
  @Input({required:true}) type!:string;
}
