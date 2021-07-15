function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = class {
    
    constructor(max) {
        this.magicNumber = getRandomInt(1, max);
        this.lowerBound = 0;
        this.upperBound = max;
    }

    progress() {
        return [this.lowerBound, this.upperBound];
    }

    guess(attempt) {
        if (attempt < this.magicNumber) {
            this.lowerBound = Math.max(this.lowerBound, attempt);
        } else if (attempt > this.magicNumber) {
            this.upperBound = Math.min(this.upperBound, attempt);
        } else {
            this.lowerBound = this.magicNumber;
            this.upperBound = this.magicNumber;
        }

        return this.progress();
    }
};