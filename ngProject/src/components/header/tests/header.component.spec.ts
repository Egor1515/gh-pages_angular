import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from "../../footer/footer.component";

describe('FooterComponent', () => {
    let component: FooterComponent
    let fixture: ComponentFixture<FooterComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        })

        fixture = TestBed.createComponent(FooterComponent)
        component = fixture.componentInstance;
    })

    it('Должен создать компонент', () => {
        expect(component).toBeTruthy()
    })
})