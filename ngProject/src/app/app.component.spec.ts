import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';

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

    // TOASK:с точки зрения верстки, здесь ли это должно быть сверстано и проверяться?
    it('Кнопка Load more загружается, даже если нет ни одного курса', () => {
        appComponent.courses = []
        fixture.detectChanges()
        const loadMoreButton = fixture.nativeElement.querySelector('button.addMoreBtn')
        console.log(loadMoreButton)
        expect(loadMoreButton).toBeTruthy()
    })

    it('Вызов onAddMore', () => {
        const emitEvent = appComponent.onAddMore()
        //Пока просто проверим, что правильно возвращаем return
        expect(emitEvent).toBe('Btn Clicked')
    })

    it('Удаление через onCourseDeleted', () => {
        const courseId: string = '123'
        const emitEvent = appComponent.onCourseDeleted(courseId)

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
                starred: false
            }
        ]
        courseListFixture.detectChanges()

        expect(courseListComponent).toBeTruthy()
    })
});
