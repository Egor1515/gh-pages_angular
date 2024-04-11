import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from '../course-list.component';
import { Course } from '../../intefaces/course.interface';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseListComponent],
        });

        fixture = TestBed.createComponent(CourseListComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should sort by creationDate', () => {
        const mocks = [
            {
                id: '3',
                name: 'Angular Masterclass#3',
                creationDate: '04.20.2021',
                duration: '3 h 45 min',
                description: `text`,
                starred: false
            },
            {
                id: '2',
                name: 'Angular Masterclass#2',
                creationDate: '04.20.2019',
                duration: '3 h 45 min',
                description: `text`,
                starred: false
            },
            {
                id: '1',
                name: 'Angular Masterclass#1',
                creationDate: '04.20.2020',
                duration: '3 h 45 min',
                description: `text`,
                starred: false
            },
        ];

        component.courses = mocks
        component.sortCourses()

        expect(component.courses[0].name).toBe('Angular Masterclass#2')
        expect(component.courses[1].name).toBe('Angular Masterclass#1')
        expect(component.courses[2].name).toBe('Angular Masterclass#3')
    })

    it('should handle empty array input', () => {
        const mock: Course[] = []

        component.courses = mock
        component.sortCourses()

        expect(component.courses.length).toEqual(0)
    })

    it('should handle array with a single input', () => {
        const mock: Course[] = [
            {
                id: '3',
                name: 'Angular Masterclass#3',
                creationDate: '04.20.2021',
                duration: '3 h 45 min',
                description: `text`,
                starred: false
            }
        ]

        component.courses = mock
        component.sortCourses()

        expect(component.courses.length).toEqual(1)
    })
});
