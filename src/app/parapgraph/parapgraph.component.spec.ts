import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParapgraphComponent } from './parapgraph.component';

describe('ParapgraphComponent', () => {
  let component: ParapgraphComponent;
  let fixture: ComponentFixture<ParapgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParapgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParapgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
