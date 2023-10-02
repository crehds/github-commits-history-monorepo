import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FilterQueryPipe implements PipeTransform {
  transform(value: any) {
    const filteredValue = Object.entries(value)
      .filter(([_, value]) => value !== '')
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    return filteredValue;
  }
}
