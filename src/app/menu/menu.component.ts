import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public texto:String
  constructor() { }

  ngOnInit() {
    this.texto = "ola tudo bem"
  }
  click(){
    this.texto="clicou"
  }

}
