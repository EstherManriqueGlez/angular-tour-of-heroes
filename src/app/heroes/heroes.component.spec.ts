import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [AppModule],
      providers: [HeroService, HttpClient],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeroesComponent', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const hero = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a variable heroes = []', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const hero = fixture.componentInstance;
    expect(hero.heroes).toBeTruthy();
    expect(hero.heroes).toEqual([]);
  });

  it('should render subtitle My Herores', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('My Heroes');
  });

  it('should getHeroes()', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroC = fixture.componentInstance;

    expect(heroC.getHeroes()).toEqual();
  });

  it('should add(name: string)', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroC = fixture.componentInstance;
    const name = ''
    expect(heroC.add(name)).toEqual();
  });
});
