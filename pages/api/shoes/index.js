import path from 'path';
import { promises as fs } from 'fs';
import FilterHelper from '../../../utils/FilterHelper';
import parseUrlParams from '../../../utils/parseUrlParams';

export default async function handler(req, res) {
    const { colors, categories, pricerange, page } = parseUrlParams(req.query.params)
    const pageLimit = 12;
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/miista-export.json', 'utf8');

    const fileContentsJson = JSON.parse(fileContents)
    const edges = fileContentsJson.data.allContentfulProductPage.edges;
    const nodes = Object.values(edges.map((edge) => edge.node))

    // filter products based on search query other than page
    const filteredNodes = filterNodes(nodes, colors, categories, pricerange)

    // Filter products based on page query
    const pageNodes = getPage(filteredNodes, page, pageLimit)

    const pageAmount = Math.ceil(filteredNodes.length / pageLimit)
    const response = [pageNodes, pageAmount];

    res.status(200).json(response);
}

function getPage(nodes, index, pageLimit) {
    const pageIndex = index !== undefined ? index : 0
    const minIndex = pageIndex === 0 ? 0 : pageLimit * pageIndex
    const maxIndex = pageIndex === 0 ? pageLimit : (pageLimit * pageIndex) + pageLimit

    const page = nodes.filter((node, index) => {
        if (index >= minIndex && index < maxIndex) {
            return true
        }
    })

    return page
}

function filterNodes(nodes, colors, categories, pricerange) {
    const filteredNodes = nodes.filter((node) => {

        const itemColors = node.colorFamily !== null ? node.colorFamily.map(c => c.name.toLowerCase().trim()) : []
        const itemCategories = node.categoryTags !== null ? node.categoryTags.map((c) => c.toLowerCase().trim()) : []
        const itemPrice = Number(node.shopifyProductEu.variants.edges[0].node.price)

        const search = new FilterHelper();
        search.filterStringArrays(itemColors, colors)
            .filterStringArrays(itemCategories, categories)
            .filerByPriceRange(itemPrice, pricerange)

        return search.value
    })

    return filteredNodes
}