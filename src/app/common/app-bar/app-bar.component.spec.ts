import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppBarComponent } from './app-bar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppBarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'week4tut'`, () => {
    const fixture = TestBed.createComponent(AppBarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('workshop4-5');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('workshop4-5 app is running!');
  });
});
