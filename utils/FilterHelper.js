class FilterHelper {
    constructor() {
        this.value = true
    }

    filterStringArrays(itemArray, targetArray) {
        if (this.value) {
            let matchFound = false;
            if (targetArray.length !== 0) {
                if (itemArray.length !== 0) {
                    itemArray.forEach(color => {
                        if (targetArray.includes(color)) {
                            matchFound = true
                        }
                    });
                }
            } else {
                matchFound = true
            }

            this.value = matchFound
        }
        return this
    }

    filerByPriceRange(itemPrice, targetPriceRange) {
        const minTarget = Number(targetPriceRange[0])
        const maxTarget = Number(targetPriceRange[1])

        if (this.value) {
            let matchFound = false;
            if ((minTarget + maxTarget) !== 0) {

                if (itemPrice >= minTarget && itemPrice <= maxTarget) {
                    matchFound = true
                }

            } else {
                matchFound = true
            }

            this.value = matchFound
        }
        return this
    }
}

export default FilterHelper