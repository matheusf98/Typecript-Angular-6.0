import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-card',
    templateUrl: './card.Component.html'
})
export class CardComponent{

    @Input() title: string = '';
}