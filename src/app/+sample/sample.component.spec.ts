import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { AuFaInputComponent }  from './au-fa-input';

/**
 * Load the implementations that should be tested
 */
import { SampleComponent } from './sample.component';

describe(`SampleComponent`, () => {
  let comp: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  let el: DebugElement;
  let emailField: DebugElement;

  /**
   * async beforeEach
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent, AuFaInputComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    /**
     * Compile template and css
     */
    .compileComponents();
  }));

  /**
   * Synchronous beforeEach
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    comp    = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.query(By.css('#email-field'));

    /**
     * Trigger initial data binding
     */
    fixture.detectChanges();
  });


  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it(`should create a font awesome email input`, async( () => {
    expect(emailField).toBeTruthy();
  }));

  it(`should include the correct email icon inside email input`, async( () => {
    console.log(emailField.nativeElement.outerHTML);
    expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  }));

   it(`should have projected the correct test input inside the email field `, async( () => {
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
  }));
});
