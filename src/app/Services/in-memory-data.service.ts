import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Warrior' },
            { id: 13, name: 'Rogue' },
            { id: 14, name: 'Cultist' },
            { id: 15, name: 'Wanderer' },
            { id: 20, name: 'Burglar' }
        ];
        return { heroes };
    }
}
