import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaPartidoPage } from './alta-partido.page';

describe('AltaPartidoPage', () => {
  let component: AltaPartidoPage;
  let fixture: ComponentFixture<AltaPartidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPartidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaPartidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
