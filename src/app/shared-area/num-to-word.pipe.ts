import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {
public transform(value:number, capitalFirstLetter:boolean):string{
    if(value >=0 && value <=19){
const words = ["Zero","One","Two","Three","Four",
"Five","Six","Seven","Eight","Nine","Ten",
"Eleven","Twelve","Thirteen","Fourteen","Fifteen",
"Sixteen","Seventeen","Eighteen","Nineteen"]
if(!capitalFirstLetter){
    return words[value].toLowerCase()
}

return words[value]
}
return value.toString();
}

}
