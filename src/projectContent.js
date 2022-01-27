class projectContent {
    constructor(imgs, desc) {
        this.imgs = imgs;
        this.desc = desc;
        this.currIndex = 0;
        this.maxIndex = imgs.length;
    }

    getCurrIndex() {
        return this.currIndex;
    }

    getNextCurrIndexValues() {
        this.currIndex += 1

        if (this.currIndex < this.maxIndex){
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        } else {
            this.currIndex -= 1;
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        }
    }

    getPrevCurrIndexValues() {
        this.currIndex -= 1
        
        if (this.currIndex < this.maxIndex){
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        } else {
            this.currIndex += 1;
            return [this.getImgs()[this.currIndex], this.getDesc()[this.currIndex]];
        }
    }

    getImgs() {
        return this.imgs;
    }

    setImgs(inputImgs) {
        this.imgs = inputImgs;
    }

    getDesc() {
        return this.desc;
    }

    setDesc(inputDesc) {
        this.desc = inputDesc;
    }
}

export default projectContent;