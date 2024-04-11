import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from '../course-list.component';

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

    it('should call sortCourses()', () => {
        const emit = jest.spyOn(component, 'sortCourses')
        // fixture.detectChanges(); 

        component.ngOnInit()
        expect(emit).toHaveBeenCalled()
    });
})