import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imageHandler'
})
export class ImageHandlerPipe implements PipeTransform {

  transform(image: any): string {
    if (!image || image === '') {
      return environment.DEFAULT_IMG;
    } else {
      return image;
    }
  }

}
