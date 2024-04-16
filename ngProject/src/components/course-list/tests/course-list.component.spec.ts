import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CourseListComponent } from '../course-list.component';
import { CourseListModule } from '../course-list.module';
import { Course } from '../../../interfaces/course.interface';
import { TimeFormatPipe } from '../../../pipes/timeFormat.pipe';
import { TitleCasePipe } from '@angular/common';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CourseListModule],
            declarations: [CourseListComponent],
        });

        fixture = TestBed.createComponent(CourseListComponent);
        component = fixture.componentInstance;
    });

    it('При пустом массиве не рендерим компонент', () => {
        const mock: Course[] = []
        component.courses = mock

        fixture.detectChanges()
        //TOASK здесь уточнить правильно ли обращаться не к component, а получать корневой элемент и обращаться к нему
        //Выглядит так, как будто все равно рендерится компонент, просто он пустой
        const native = fixture.nativeElement
        const componentItem = native.querySelector('.island')

        expect(componentItem).toBeFalsy()
    })

    it('При пустом массиве все равно рендерим кнопку LoadMore', () => {
        const mock: Course[] = []
        component.courses = mock
        fixture.detectChanges()
        //TOASK здесь уточнить правильно ли обращаться не к component, а получать корневой элемент и обращаться к нему
        //Выглядит так, как будто все равно рендерится компонент, просто он пустой
        const native = fixture.nativeElement
        const componentItem = native.querySelector('.loadMore')
        expect(componentItem.textContent).toBeTruthy()
    })

    it('При передаче массива в courses должны рендерить равное количество экземпляров компонента', () => {
        const mock: Course = {
            id: '3',
            name: 'Angular Masterclass#3',
            creationDate: new Date('04.20.2021'),
            duration: 80,
            description: `text`,
            topRated: false
        }

        component.courses = [mock]
        fixture.detectChanges()
        const native = fixture.nativeElement
        const componentItem = native.querySelectorAll('.island')

        expect(componentItem).toBeTruthy()
        expect(componentItem.length).toEqual(1)
    })

    it('Должен эмитить событие onDeleteCourse один раз', () => {
        const courseIdToDelete = '123'
        const emitSpy = jest.spyOn(component.deleteCourse, 'emit')
        component.onDeleteCourse(courseIdToDelete)

        expect(emitSpy).toHaveBeenCalledTimes(1)
    })

    it('Должен эмитить событие с courseId', () => {
        const courseIdToDelete = '123'
        const emitSpy = jest.spyOn(component.deleteCourse, 'emit')
        component.onDeleteCourse(courseIdToDelete)

        expect(emitSpy).toHaveBeenCalledWith(courseIdToDelete)
    })

    it('Вызов onAddMore', () => {
        const emitEvent = component.onAddMore()

        //Пока просто проверим, что правильно возвращаем return
        expect(emitEvent).toBe('Btn Clicked')
    })

    it('Проверяем рендеринг всех деталей компонента с курсом', fakeAsync(() => {
        const course: Course = {
            id: '3',
            name: 'angular masterclass#3',
            creationDate: new Date('04.20.2021'),
            duration: 80,
            description: `text`,
            topRated: true
        }

        component.courses = [course]
        fixture.detectChanges()
        tick()

        const native = fixture.nativeElement
        const element = native.querySelector('.island')
        const starIcon = native.querySelector('.iconStar')
        const editButton = native.querySelector('.edit-btn');
        const deleteButton = native.querySelector('.delete-btn');
        const timePipe = new TimeFormatPipe()
        const nameTransformPipe = new TitleCasePipe()

        expect(native.textContent).toContain('Apr 20, 2021');
        expect(native.textContent).toContain(timePipe.transform(course.duration));
        expect(element.textContent).toContain(nameTransformPipe.transform(course.name))
        expect(native.textContent).toContain(course.description);
        expect(starIcon).toBeTruthy();
        expect(editButton).toBeTruthy();
        expect(deleteButton).toBeTruthy();
    }))

    it('Должен вызывать sortCourses', () => {
        const emit = jest.spyOn(component, 'sortCourses')
        component.ngOnInit()
        expect(emit).toHaveBeenCalled()
    });

    it('Должен создать компонент', () => {
        expect(component).toBeTruthy();
    });

    it('Должен корректно сортировать переданный массив', () => {
        const mocks: Course[] = [
            {
                id: '1',
                name: 'Angular Masterclass#3',
                creationDate: new Date('12.20.2022'),
                duration: 120,
                description: `text`,
                topRated: false
            },
            {
                id: '2',
                name: 'Angular Masterclass#2',
                creationDate: new Date('04.30.2021'),
                duration: 60,
                description: `text`,
                topRated: false
            },
            {
                id: '3',
                name: 'Angular Masterclass#1',
                creationDate: new Date('04.22.2020'),
                duration: 100,
                description: `text`,
                topRated: false
            },
        ];

        component.courses = mocks
        component.sortCourses()

        expect(component.courses[0].name).toBe('Angular Masterclass#3')
        expect(component.courses[1].name).toBe('Angular Masterclass#2')
        expect(component.courses[2].name).toBe('Angular Masterclass#1')
        expect(component.courses.length).toEqual(3);
    })



    it('Должен обрабатывать массив с одним элементом', () => {
        const mock: Course[] = [
            {
                id: '3',
                name: 'Angular Masterclass#3',
                creationDate: new Date('04.20.2021'),
                duration: 90,
                description: `text`,
                topRated: false
            }
        ]

        component.courses = mock
        component.sortCourses()

        expect(component.courses.length).toEqual(1)
    })
})