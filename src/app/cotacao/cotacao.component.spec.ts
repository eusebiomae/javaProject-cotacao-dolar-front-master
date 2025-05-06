import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CotacaoComponent } from './cotacao.component';

describe('CotacaoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CotacaoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CotacaoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
