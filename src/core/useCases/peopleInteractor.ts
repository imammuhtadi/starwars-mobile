import { People } from '../entities';

export interface PeopleApiService {
    getPeople: () => Promise<People[]>;
}

export class PeopleInteractor {
    peopleService: PeopleApiService;

    constructor(peopleService: PeopleApiService) {
        this.peopleService = peopleService;
    }

    async getPeople(): Promise<People[]> {
        return this.peopleService.getPeople();
    }

}