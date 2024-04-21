import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router'; // Импортируйте Router из @angular/router

describe('CourseListComponent', () => {
    let appComponent: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    const mockRouter = {
        router: {
            url: '/login'
        }
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [Router]
        });

        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;
    });


    it('Должен создать компонент', () => {
        expect(appComponent).toBeTruthy()
    })

    test('should return true if the current URL does not include "/login"', () => {
        const result = appComponent.isOnLoginPage.call(mockRouter);
        expect(result).toBe(false);
    });

    test('should return false if the current URL includes "/login"', () => {
        const result = appComponent.isOnLoginPage.call(mockRouter);
        expect(result).toBe(false);
    });
});
