class Validator {
    positive(num) {
        return num >= 1000;
    }
    percent(num) {
        return num <= 100 && num >= 0;
    }
    username = (username) => {
        const regex = new RegExp(
            '^[a-zA-Z0-9](_(?!(.|_))|.(?!(_|.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$',
        );
        return regex.test(username);
    };
    name = (name) => {
        const regex =
            /^[a-zA-Z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;

        return regex.test(name.trim()) && name.length <= 30;
    };
    noSpecialCharacters = (name) => {
        const regex =
            /^[a-zA-Z0-9 ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;

        return regex.test(name.trim()) && name.length <= 30;
    };
    phone = (phone) => {
        const regex = new RegExp('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$');
        return regex.test(phone);
    };
    email(str) {
        // const regex = /^\S+@\S+\.\S+$/;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(str);
    }
}

export default new Validator();