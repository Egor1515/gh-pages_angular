import { Component } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less'
})
export class SearchSectionComponent {
  inputValue: string = ""

  onSearch(){
    if(this.inputValue.length > 0){
      console.log(this.inputValue)
      return
    }
    console.error('The input is empty')
  }
}
