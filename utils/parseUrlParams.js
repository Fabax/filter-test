const parseUrlParams = (params) => {
    const response = { colors: [], categories: [], pricerange: [0, 0], page: 0 }
    if (params === undefined) return response

    const paramsArray = params.includes("&") ? params.split("&") : [params]

    paramsArray.forEach(paramString => {
        let keyValue = paramString.split("=")
        switch (keyValue[0]) {
            case "colors":
                response.colors = keyValue[1].split(",").map((v) => v.toLowerCase().trim());
                break;
            case "categories":
                response.categories = keyValue[1].split(",").map((v) => v.toLowerCase().trim());
                break;
            case "pricerange":
                response.pricerange = keyValue[1].split(",").map((v) => v.toLowerCase().trim());
                break;
            case "page":
                response.page = Number(keyValue[1]);
                break;
        }
    });

    return response
}

export default parseUrlParams