import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sala4bPage } from './sala4b.page';

describe('Sala4bPage', () => {
  let component: Sala4bPage;
  let fixture: ComponentFixture<Sala4bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sala4bPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sala4bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
