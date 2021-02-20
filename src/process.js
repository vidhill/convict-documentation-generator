const pick = require('just-pick');

const pickFn = function (arr) {
    return (obj) => pick(obj, arr);
};

const newline = '\n';
const separator = '|';

const wrap = (item) => separator + item + separator;

const process = function (convictConfig, titleMap, propertiesArray) {
    const item = Object.keys(convictConfig).map((key) => convictConfig[key]);

    const pickTargetProperties = pickFn(propertiesArray);

    const itemArray = item.map(pickTargetProperties).map((item) => {
        const { format } = item;
        const formatString =
            typeof format === 'function' ? format.name.toLowerCase() : format;
        return Object.assign(item, { format: formatString });
    });

    const bodyArray = itemArray.map((item) => {
        const body = propertiesArray.map((key) => item[key]).join(separator);
        return wrap(body);
    });

    const tableHeader = propertiesArray
        .map((key) => titleMap[key])
        .join(separator);

    const tableHeadSeparator = propertiesArray
        .map(() => '-'.repeat(4))
        .join(separator);

    const tableBody = bodyArray.join(newline);

    const result = [
        wrap(tableHeader),
        wrap(tableHeadSeparator),
        tableBody,
    ].join(newline);

    return result;
};

module.exports = process;
