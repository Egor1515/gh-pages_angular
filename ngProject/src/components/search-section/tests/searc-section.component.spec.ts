import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSectionComponent } from '../search-section.component';
import { SearchSectionModule } from '../search-section.module';
import { mocks } from '../../course-list/courses-mock';
import { Course } from '../../../interfaces/course.interface';
import { FilterCoursesPipe } from '../../../pipes/filterCourses.pipe';

describe('CourseListComponent', () => {
    let component: SearchSectionComponent;
    let fixture: ComponentFixture<SearchSectionComponent>;
    let filterPipe: FilterCoursesPipe

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchSectionComponent],
            imports: [SearchSectionModule]
        });

        fixture = TestBed.createComponent(SearchSectionComponent);
        component = fixture.componentInstance;
        filterPipe = TestBed.inject(FilterCoursesPipe)
    });


    it('Должен создать компонент', () => {
        expect(component).toBeTruthy()
    })

    it("При инициализации компонента устанавливать значение массивов", () => {
        const courses: Course[] = mocks
        component.coursesList = courses
        fixture.detectChanges()

        expect(component.filteredCourses).toEqual(courses)
        expect(component.originalCoursesList).toEqual(courses)
    })

    it('Проверяем что отфильтрованный массив ресетится при пустом вводе или вводе пробелов', () => {
        const mockCourses: Course[] = mocks;

        component.coursesList = mockCourses;
        component.inputValue = 'Video';
        fixture.detectChanges()
        component.onSearch()
        expect(component.filteredCourses.length).toEqual(2)

        component.inputValue = ''
        fixture.detectChanges()
        component.onSearch()
        expect(component.filteredCourses).toEqual(mockCourses)

        component.inputValue = '    '
        fixture.detectChanges()
        component.onSearch()
        expect(component.filteredCourses).toEqual(mockCourses)
    });

    it('При переданном event вызывать preventDefault', () => {
        //Создаем заглушку для проверки вызова preventDefault
        const preventDefault = jest.fn()
        const mockEvent = new Event('mock', { bubbles: true, cancelable: true })
        Object.defineProperty(mockEvent, 'preventDefault', {
            value: preventDefault
        })
        component.onSearch(mockEvent)

        expect(preventDefault).toHaveBeenCalled()
    })

    it('При передаче event input', () => {
        const inputValue = 'some value';
        const event = new Event('input');
        const inputElement = document.createElement('input');
        inputElement.value = inputValue;
        jest.spyOn(event, 'target', 'get').mockReturnValue(inputElement);

        component.onInputChange(event);

        expect(component.inputValue).toEqual(inputValue);
    })
});
