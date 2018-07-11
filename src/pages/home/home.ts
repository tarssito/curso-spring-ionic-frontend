import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {//desabilita o menu lateral na tela de login
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {//após sair da tela de login, habilita novamente
    this.menu.swipeEnable(true);
  }

  login() {
    // empilha as páginas add o botão de voltar
    //this.navCtrl.push('CategoriasPage');
    this.navCtrl.setRoot('CategoriasPage');
  }
}
