import { Component, OnInit } from '@angular/core';
import {Song} from "../../core/model/song";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  songs : Song[] = [
    {cover: "assets/lilnas.jpg",
      title: "industry baby", artist: "lil nas x", genre: "rap", songLenght: "3:22", year: 2021},
    {cover: "assets/slutpop.jpeg",
      title: "slut pop", artist: "kim petras", genre: "pop", songLenght: "2:45", year: 2022},
    {cover: "assets/n95.jpg",
      title: "N-95", artist: "kendrick lamar", genre: "rap", songLenght: "3:24", year: 2022},
    {cover: "assets/dojacat.jpg",
      title: "get into it (yuh)", artist: "doja cat", genre: "rap", songLenght: "3:15", year: 2021}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
