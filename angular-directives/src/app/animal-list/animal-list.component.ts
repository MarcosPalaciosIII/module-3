import { Component, OnInit } from '@angular/core';
import { animalList } from './animals';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  listOfAnimals: any[] = animalList;

  constructor() { }

  ngOnInit() {
  }

}
