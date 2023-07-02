import { People } from '../entities';
import { PeopleApiService } from '../useCases/peopleInteractor';
import Request from './request';

class PeopleService implements PeopleApiService {
    request: Request;

    constructor() {
        this.request = new Request();
    }

    async getPeople(): Promise<People[]> {
        const response = await this.request.get('people');
        const result = response.data.results;
        const people = result.map((value: any) => People.fromJson(value));
        return people;
    }

}

export { PeopleService };