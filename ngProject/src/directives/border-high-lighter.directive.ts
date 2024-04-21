import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[courseBorder]'
})
export class BorderHighLighterDirective {
  @Input() creationDate!: Date | undefined

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) { 
  }

  ngOnInit() {
    this.setBorder()
  }

  setBorder() {
    if (!this.creationDate) return

    const currentDate = new Date()
    const twoWeeksAgo = new Date()
    twoWeeksAgo.setDate(currentDate.getDate() - 14)

    if (this.creationDate < currentDate && this.creationDate >= twoWeeksAgo) {
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid #54DB7A99')
    } else if (this.creationDate > currentDate) {
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid #82AAFF99')
    }
  }

}
