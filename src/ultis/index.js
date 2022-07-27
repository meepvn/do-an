import validator from './validator';
const formatMoney = (n, currency) => {
    return (
        n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        }) + currency
    );
};

function removeAccents(str) {
    var AccentsMap = [
        'aàảãáạăằẳẵắặâầẩẫấậ',
        'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
        'dđ',
        'DĐ',
        'eèẻẽéẹêềểễếệ',
        'EÈẺẼÉẸÊỀỂỄẾỆ',
        'iìỉĩíị',
        'IÌỈĨÍỊ',
        'oòỏõóọôồổỗốộơờởỡớợ',
        'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
        'uùủũúụưừửữứự',
        'UÙỦŨÚỤƯỪỬỮỨỰ',
        'yỳỷỹýỵ',
        'YỲỶỸÝỴ',
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}

export { removeAccents, formatMoney, validator };
