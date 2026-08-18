import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { ApiService } from './api.service';
import { of, throwError } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<App>;
  let component: App;
  let mockApiService: { getHelloMessage: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    mockApiService = {
      getHelloMessage: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    }).compileComponents();
  });

  it('should create the app and initialize title signal', () => {
    mockApiService.getHelloMessage.mockReturnValue(of(''));
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
    expect(component['title']()).toBe('frontend');
  });

  it('should display the greeting message from backend when API succeeds', () => {
    const greeting = 'Hello from MySQL Database with Spring Data JPA & Flyway!';
    mockApiService.getHelloMessage.mockReturnValue(of(greeting));

    fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Triggers ngOnInit & Signal change detection

    const compiled = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance['message']()).toBe(greeting);
    expect(compiled.querySelector('p')?.textContent).toContain(`Message from backend: ${greeting}`);
  });

  it('should display error message when API fails', () => {
    mockApiService.getHelloMessage.mockReturnValue(throwError(() => new Error('Network Error')));

    fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Triggers ngOnInit

    const compiled = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance['message']()).toBe('Error fetching message from backend.');
    expect(compiled.querySelector('p')?.textContent).toContain('Message from backend: Error fetching message from backend.');
  });
});
