export class ScorePanel {
    score: number = 0;
    level: number = 1;
    maxLevel: number;
    scoreUP:number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel: number = 10,scoreUP:number=10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.scoreUP = scoreUP;
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score%10==0){
            this.levelUP()
        }
    }
    levelUP() {
        if (this.maxLevel < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}