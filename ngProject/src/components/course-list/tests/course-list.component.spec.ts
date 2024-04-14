// import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
// import { CourseListComponent } from '../course-list.component';
// import { Course } from '../../intefaces/course.interface';

// describe('CourseListComponent', () => {
//     let component: CourseListComponent;
//     let fixture: ComponentFixture<CourseListComponent>;;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [CourseListComponent],
//         });

//         fixture = TestBed.createComponent(CourseListComponent);
//         component = fixture.componentInstance;
//     });

//     it('Должен обрабатывать пустой массив', () => {
//         const mock: Course[] = []
//         component.courses = mock

//         component.sortCourses()
//         fixture.detectChanges()
//         //TOASK здесь уточнить правильно ли обращаться не к component, а получать корневой элемент и обращаться к нему
//         //Выглядит так, как будто все равно рендерится компонент, просто он пустой
//         const native = fixture.nativeElement
//         const componentItem = native.querySelector('.island')

//         expect(componentItem).toBeFalsy()
//     })

//     it('При передаче массива в courses должны рендерить равное количество экземпляров компонента', () => {
//         const mock: Course = {
//             id: '3',
//             name: 'Angular Masterclass#3',
//             creationDate: Date('04.20.2021',
//             duration: '3 h 45 min',
//             description: `text`,
//             starred: false
//         }
//         component.courses = [mock]
//         fixture.detectChanges()
//         const native = fixture.nativeElement
//         const componentItem = native.querySelectorAll('.island')

//         expect(componentItem).toBeTruthy()
//         expect(componentItem.length).toEqual(1)
//     })

//     it('Должен эмитить событие onDeleteCourse один раз', () => {
//         const courseIdToDelete = '123'
//         const emitSpy = jest.spyOn(component.courseDeleted, 'emit')
//         component.onDeleteCourse(courseIdToDelete)

//         expect(emitSpy).toHaveBeenCalledTimes(1)
//     })

//     it('Должен эмитить событие с courseId', () => {
//         const courseIdToDelete = '123'
//         const emitSpy = jest.spyOn(component.courseDeleted, 'emit')
//         component.onDeleteCourse(courseIdToDelete)

//         expect(emitSpy).toHaveBeenCalledWith(courseIdToDelete)
//     })

//     it('Проверяем рендеринг всех деталей компонента с курсом',fakeAsync(() => {
//         const course: Course = {
//             id: '3',
//             name: 'Angular Masterclass#3',
//             creationDate: '04.20.2021',
//             duration: '3 h 45 min',
//             description: `text`,
//             starred: true
//         }

//         component.courses = [course]
//         fixture.detectChanges()

//         tick()

//         const native = fixture.nativeElement
//         const element = native.querySelector('.island')
//         console.log(element.textContent)
//         console.log(native.textContent)
//         expect(native.textContent).toContain(course.creationDate);
//         expect(native.textContent).toContain(course.duration);
//         expect(element.textContent).toContain(course.name)
//         // expect(native.textContent).toContain(course.description);
//         // const starIcon = native.querySelector('.starIcon')
//         // expect(starIcon).toBeTruthy();
//         // fixture.whenRenderingDone()
//         // const editButton = native.querySelector('.edit-button');
//         // const deleteButton = native.querySelector('.delete-button');
//         // expect(editButton).toBeTruthy();
//         // expect(deleteButton).toBeTruthy();
//     }))

//     it('Должен вызывать sortCourses', () => {
//         const emit = jest.spyOn(component, 'sortCourses')
//         component.ngOnInit()
//         expect(emit).toHaveBeenCalled()
//     });

//     it('Должен создать компонент', () => {
//         expect(component).toBeTruthy();
//     });

//     it('Должен корректно сортировать переданный массив', () => {
//         const mocks: Course[] = [
//             {
//                 id: '3',
//                 name: 'Angular Masterclass#3',
//                 creationDate: '04.20.2021',
//                 duration: '3 h 45 min',
//                 description: `text`,
//                 starred: false
//             },
//             {
//                 id: '2',
//                 name: 'Angular Masterclass#2',
//                 creationDate: '04.20.2019',
//                 duration: '3 h 45 min',
//                 description: `text`,
//                 starred: false
//             },
//             {
//                 id: '1',
//                 name: 'Angular Masterclass#1',
//                 creationDate: '04.20.2020',
//                 duration: '3 h 45 min',
//                 description: `text`,
//                 starred: false
//             },
//         ];

//         component.courses = mocks
//         component.sortCourses()

//         expect(component.courses[0].name).toBe('Angular Masterclass#2')
//         expect(component.courses[1].name).toBe('Angular Masterclass#1')
//         expect(component.courses[2].name).toBe('Angular Masterclass#3')
//         expect(component.courses.length).toEqual(3);
//     })



//     it('Должен обрабатывать массив с одним элементом', () => {
//         const mock: Course[] = [
//             {
//                 id: '3',
//                 name: 'Angular Masterclass#3',
//                 creationDate: '04.20.2021',
//                 duration: '3 h 45 min',
//                 description: `text`,
//                 starred: false
//             }
//         ]

//         component.courses = mock
//         component.sortCourses()

//         expect(component.courses.length).toEqual(1)
//     })
// })