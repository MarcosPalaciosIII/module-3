import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  jokeList: any[] = [];

  constructor(private jokeThang: JokeService) { }

  ngOnInit() {
  }

  fetchJoke() {
    this.jokeThang.getRandomJoke()
    .subscribe(
      // SUCCESS
      (jokeData: any) => {
      console.log("Random joke!")
      console.log(jokeData);

      this.jokeList.push(jokeData.value.joke);
      },
      // ERROR
      (err) => {
      alert('Sorry! Somthing went wrong.');

      console.log("SHEEEEEEEEET");
      console.log(err);
      }
    );
  } // fetchJoke()

}
