import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../footer.component';

describe('CourseListComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
        });

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
    });

    it('Должен вызывать sortCourses', () => {
        expect(component).toBeTruthy()
    });
})