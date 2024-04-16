import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CourseListComponent } from "../course-list.component";
import { CourseListTestHostComponent } from "../course-list.test-host.component";
import { CourseListModule } from "../course-list.module";
import { mocks } from "../courses-mock";
import { By } from "@angular/platform-browser";

describe('Проверка работы компонента внутри тест хоста', () => {
    let fixture: ComponentFixture<CourseListTestHostComponent>;
    let testHostComponent: CourseListTestHostComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseListComponent, CourseListTestHostComponent],
            imports: [CourseListModule],
        }).compileComponents();

        fixture = TestBed.createComponent(CourseListTestHostComponent);
        testHostComponent = fixture.componentInstance;
        fixture.detectChanges() // TOASK Делаем изначальную привязку свойств в компоненте, надо ли?
    });

    it('Хост должен рендериться', () => {
        expect(testHostComponent).toBeTruthy()
    })

    it('Компонент не отображается без переданных данных через @Input', () => {
        const containerElement = fixture.nativeElement.querySelector('.island');
        expect(containerElement).toBeFalsy();
    });

    it('Компонент отображается при передаче данных через @Input', () => {
        testHostComponent.courses = mocks
        fixture.detectChanges()
        const containerElement = fixture.nativeElement.querySelector('.island');

        expect(containerElement).toBeTruthy();
    });

    it('По нажатию на кнопку Delete - передаем событие через @Output', () => {
        const onDeleteCourseSpy = jest.spyOn(testHostComponent, 'onDeleteCourse')
        const courseId = '123';
        testHostComponent.onDeleteCourse(courseId);
        expect(onDeleteCourseSpy).toHaveBeenCalledWith(courseId);
        expect(onDeleteCourseSpy).toHaveBeenCalledTimes(1);
    });
});
