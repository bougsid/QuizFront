import {Component, OnInit} from '@angular/core';
import {QuizService} from "../quiz/quiz.service";
import {Quiz} from "../add-quiz/quiz";
import {QuizUserAssociation} from "../information/QuizUserAssociation";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'app-user-quizzes',
    templateUrl: './user-quizzes.component.html',
    styleUrls: ['./user-quizzes.component.css']
})
export class UserQuizzesComponent implements OnInit {

    private type: string;

    private quizUserAssociations: Array<QuizUserAssociation>;
    private totalItems;
    private currentPage = 1;
    private itemsPerPage = 3;

    constructor(private quizService: QuizService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPage = 1;
                this.getQuizzesOfLoggedUser();
            }
        });
    }

    getQuizzesOfLoggedUser() {
        this.type = this.activatedRoute.snapshot.params['type'];
        let active: boolean = (this.type == 'active');
        this.quizService.getQuizzesOfLoggedUser(this.currentPage - 1, this.itemsPerPage).subscribe(result => {
            this.quizUserAssociations = result.content;
            this.totalItems = result.totalElements;
        });
    }

    startQuiz(quiz) {
        console.log('start Quiz');
    }

    loadPage(event) {
        let page = event.page;
        this.currentPage = page;
        this.getQuizzesOfLoggedUser();
    }
}
