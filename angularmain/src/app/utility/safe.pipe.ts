import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

 public transform(item: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {

    switch (type)  {

            case 'html': return this.sanitizer.bypassSecurityTrustHtml(item);
			case 'style': return this.sanitizer.bypassSecurityTrustStyle(item);
			case 'script': return this.sanitizer.bypassSecurityTrustScript(item);
			case 'url': return this.sanitizer.bypassSecurityTrustUrl(item);
			case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(item);
			default: throw new Error(`Invalid safe type specified: ${type}`);
        }

    }

}
