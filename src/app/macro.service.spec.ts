import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MacroService } from './macro.service';

describe('MacroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MacroService]
  }));

  it('should be created', () => {
    const service: MacroService = TestBed.get(MacroService);
    expect(service).toBeTruthy();
  });
});
