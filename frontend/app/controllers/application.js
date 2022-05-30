import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


// Only allow access to the application when authenticated
export default class ApplicationController extends Controller {
    @tracked activeView = "1";
    @tracked largestIntersectionValue = 1;

    @action
    moveView(number) {
        var element = document.getElementById("div" + String(number));
        element.scrollIntoView({ behavior: "smooth" });
    }

    @action
    setActiveViewOnScroll() {
        //console.log("Randomfunc called from application.js");
        const elemsWithIds = document.querySelectorAll("[id]");
        const observer = new IntersectionObserver(elems => {

            for (var i = 0; i < elems.length; i++) {
                if (elems[i].intersectionRatio > 0.5 && elems[i].target.id.includes("div") == true) {
                    if (elems[i].intersectionRatio - this.largestIntersectionValue > 0) {
                        this.activeView = String(elems[i].target.id.slice(3))
                    } else {
                        this.largestIntersectionValue = elems[i].intersectionRatio
                    }
                }
            }
        });


        elemsWithIds.forEach(elem => observer.observe(elem));
    }
}
