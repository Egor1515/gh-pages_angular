import { BorderHighLighterDirective } from '../border-high-lighter.directive';
import { ElementRef } from '@angular/core';

describe('BorderHighLighterDirective', () => {
  let directive: BorderHighLighterDirective;
  let elementRefMock: Partial<ElementRef>;

  beforeEach(() => {
    elementRefMock = {
      nativeElement: {
        style: {} as CSSStyleDeclaration
      }
    };

    directive = new BorderHighLighterDirective(elementRefMock as ElementRef);
  });

  it('При инициализации должен вызываться setBorder', () => {
    const emitSpy = jest.spyOn(directive,'setBorder')
    directive.ngOnInit()
    expect(emitSpy).toHaveBeenCalled()
  })

  it('Если дата отсуствует - border не навешивается', () => {
    directive.creationDate = undefined;
    directive.setBorder();
    expect(elementRefMock.nativeElement.style.border).toBeFalsy();
  });

  it('Если дата меньше сегодня, но не превышает 14 дней - бордер зеленый', () => {
    const currentDate = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(currentDate.getDate() - 7);

    directive.creationDate = twoWeeksAgo;
    directive.setBorder();
    expect(elementRefMock.nativeElement.style.border).toBe('2px solid #54DB7A99');
  });

  it('Если creationDate > текущей даты', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    directive.creationDate = futureDate;
    directive.setBorder();
    expect(elementRefMock.nativeElement.style.border).toBe('2px solid #82AAFF99');
  });

  it('should not set border if creationDate is in the past more than two weeks', () => {
    const currentDate = new Date();
    const threeWeeksAgo = new Date();
    threeWeeksAgo.setDate(currentDate.getDate() - 21);

    directive.creationDate = threeWeeksAgo;
    directive.setBorder();
    expect(elementRefMock.nativeElement.style.border).toBeFalsy();
  });
});
