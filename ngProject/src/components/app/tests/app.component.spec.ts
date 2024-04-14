import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

describe('CourseListComponent', () => {
    let appComponent: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
        });

        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;
    });


    it('Должен создать компонент', () => {
        expect(appComponent).toBeTruthy()
    })

    

    it('Удаление через ondeleteCourse', () => {
        const courseId: string = '123'
        const emitEvent = appComponent.ondeleteCourse(courseId)

        expect(emitEvent).toBe(courseId)
    })

    it('Course-list компонент загружается при хотя бы одном переданном элементе', () => {
        let courseListComponent: CourseListComponent;
        let courseListFixture: ComponentFixture<CourseListComponent>

        courseListFixture = TestBed.createComponent(CourseListComponent);
        courseListComponent = courseListFixture.componentInstance;

        appComponent.courses = [
            {
                id: '3',
                name: 'Angular Masterclass#3',
                creationDate: '04.20.2021',
                duration: '3 h 45 min',
                description: `text`,
                topRated: false
            }
        ]
        courseListFixture.detectChanges()

        expect(courseListComponent).toBeTruthy()
    })
});
