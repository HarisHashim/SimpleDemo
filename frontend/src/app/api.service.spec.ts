import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send GET request to /hello and receive plain text', () => {
    const mockResponse = 'Hello from MySQL Database with Spring Data JPA & Flyway!';

    service.getHelloMessage().subscribe((data) => {
      expect(data).toBe(mockResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/hello');
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toBe('text');

    req.flush(mockResponse);
  });
});
