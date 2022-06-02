import Component from '@ember/component';


export default class Hero extends Component {
    didInsertElement() {
        const arrow = document.getElementById('arrow');
        setTimeout(() => {
            arrow.style.color = '#000000';
        }, 3500);
    }
}