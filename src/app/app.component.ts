import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckGrammarService } from './check-grammar.service';
import { Data } from './model';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public loading: boolean;
  public data: Data;
  private paragraph: string;
  @ViewChild('f') slForm: NgForm;

  public constructor(private checkGrammarService: CheckGrammarService) {

  }

  public onSubmit(form: NgForm): void {
    if (form.value && form.valid) {
      this.paragraph = form.value.paragraph;
      this.loading = true;
      this.checkGrammarService.checkGrammar(form.value).subscribe((data: Data): void => {
        if (!data.data) {
          swal('Felicidades', '¡ No hay ningún error ortográfico !', 'success');
        }
        this.data = data;
        this.loading = false;
      }, (error: HttpErrorResponse): void => {
        this.loading = true;
        console.log(error);
      });
    }
  }

  public getWrongWord(position: number, length: number): string {
    return this.paragraph.substr(position, length);
  }
}
