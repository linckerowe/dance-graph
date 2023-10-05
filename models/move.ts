export class DanceMove {
    title: string
    type: string
    level: Level
    otherNames: Array<string> = []
    comesFrom: Array<DanceMove> = []
    leadsTo: Array<DanceMove> = []
    static types: Array<string>

    constructor(title: string, type: string, level: Level) {
        this.title = title
        this.type = type
        this.level = level

        DanceMove.types.push(type)
    }

    addOtherName(name: string) {
        this.otherNames.push(name)
    }
    addComesFrom(move: DanceMove) {
        this.comesFrom.push(move)
    }
    addLeadsTo(move: DanceMove) {
        this.leadsTo.push(move)
    }
}

export enum Level {
    Beginner1,
    Beginner2,
    Beginner3,
    Intermediate4,
    Intermediate5,
    Intermediate6,
    Advanced7,
}