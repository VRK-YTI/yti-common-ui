import { Pipe, PipeTransform } from '@angular/core';

/* FIXME: Pipe produces HTML output which has to be bound with innerHTML-attribute in the template.
          Malicious user input cannot be sanitized with this mechanism and it causes security problems.
          Angular 1 had $sce service which allowed trusting of html content partially and angular 2 doesn't have on yer.
*/

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, highlightRegexp: RegExp | undefined): string {
    if (!text || !highlightRegexp) {
      return text;
    }
    return text.replace(highlightRegexp, '<span class="highlight">$&</span>');
  }
}
