import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { CourseListComponent } from '../../course-list/course-list.component';

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

    it('Course-list компонент загружается при хотя бы одном переданном элементе', () => {
        let courseListComponent: CourseListComponent;
        let courseListFixture: ComponentFixture<CourseListComponent>

        courseListFixture = TestBed.createComponent(CourseListComponent);
        courseListComponent = courseListFixture.componentInstance;

        appComponent.courses = [
            {
                id: '3',
                name: 'Angular Masterclass#3',
                creationDate: new Date('04.20.2021'),
                duration: 100,
                description: `text`,
                topRated: false
            }
        ]
        courseListFixture.detectChanges()

        expect(courseListComponent).toBeTruthy()
    })


  it('Проверяем, что вернется id курса при вызoве onDeleteCourse', () => {
    const courseId = '123'
    expect(appComponent.ondeleteCourse(courseId)).toBe(courseId)
  })
});
