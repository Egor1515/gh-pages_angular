import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSectionComponent } from '../search-section.component';

describe('CourseListComponent', () => {
    let component: SearchSectionComponent;
    let fixture: ComponentFixture<SearchSectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchSectionComponent],
        });

        fixture = TestBed.createComponent(SearchSectionComponent);
        component = fixture.componentInstance;
    });


    it('Должен создать компонент', () => {
        expect(component).toBeTruthy()
    })

    it('Должен вернуть input если input.length > 0', () => {
        const input = 'someInput'
        component.inputValue = input
        const result = component.onSearch()

        expect(result).toBe(input)
    })


    it('Должен вернуть null если input.length <= 0', () => {
        const input = ''
        component.inputValue = input
        const result = component.onSearch()

        expect(result).toBeFalsy()
    })
});
