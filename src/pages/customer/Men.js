import React from 'react';
// import Cart from '~/components/contents/Cart';
// import Detail from '~/components/contents/Detail';
import Preview from '~/components/contents/Preview';
// import ViewAll from '~/components/contents/ViewAlll';
import { useOutletContext } from 'react-router-dom';
const Men = () => {
    const [data] = useOutletContext();
    localStorage.setItem('gender', 1);
    const { products, types: productTypes } = data;

    return (
        <div>
            {productTypes?.map((type) => {
                const dataPreview = products.filter(
                    (product) =>
                        product.Loai === type && (product.GioiTinh === 1 || product.GioiTinh === 3),
                );
                return (
                    <Preview
                        title={type}
                        data={dataPreview.slice(0, 10)}
                        key={type}
                        content={`${type} giá tốt`}
                    />
                );
            })}
        </div>
    );
};

export default Men;