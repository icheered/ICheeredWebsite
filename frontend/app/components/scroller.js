import Component from '@ember/component';
import { action } from '@ember/object';


export default class Scroller extends Component {
    @action
    onScroll() {
        console.log("On scrolling")
    }
}