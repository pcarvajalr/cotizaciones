import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservacionesComponent } from './observaciones.component';
import { By } from '@angular/platform-browser';
import { Macro } from '../macro';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { MacroService } from '../macro.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MACROS } from '../mock-macros';


describe('ObservacionesComponent', () => {
  let component: ObservacionesComponent;
  let fixture: ComponentFixture<ObservacionesComponent>;
  let macrosMock: Macro[];
  let macroServiceFake : MacroService

  beforeEach(async(() => {
    macrosMock = MACROS;
    macroServiceFake = jasmine.createSpyObj('MacroService', {
      obtenerMacros: of(macrosMock)
    });

    TestBed.configureTestingModule({
      declarations: [ ObservacionesComponent ],
      imports: [FormsModule],
      providers: [{provide: MacroService, useValue: macroServiceFake}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe existir un "div" de clase "row"',()=>{
    const divRow = fixture.debugElement.query(By.css('div[class="row"]'));
    expect(divRow).toBeTruthy();
  });

  it('deberia existir un "div" con la clase "col-md-1"', ()=>{
    const divCol = fixture.debugElement.query(By.css('div[class="col-md-1"]'));
    expect(divCol).toBeTruthy();
  });

  it('deberia existir un "select" con nombre "selMacro"',()=>{
    const selMacro = fixture.debugElement.query(By.css('select[name="selMacro"]'));
    expect(selMacro).toBeTruthy();
  });

  it('deberian existir tantos "option" como tantos elementos existan en el arreglo "MacroProyectos"', () => {
    let macros: Macro[] = macrosMock;
    const optionMacros = fixture.debugElement.queryAll(By.css('option[name="optionMacro"]'));
    expect(optionMacros.length).toBe(macros.length);
  });

  it('deberia los "option" contener el valor de la propiedad "nombre" del arreglo "macros"', () => {
    const optionMacros = fixture.debugElement.queryAll(By.css('option[class="optionMacros"]')
    );

    optionMacros.forEach(function (macroAc: DebugElement, index: number) {
      const macroElement: HTMLElement = macroAc.nativeElement;
      expect(macroElement.textContent).toContain(
        macrosMock[index].id.toString() && macrosMock[index].nombre
      );
    });
  });
});
