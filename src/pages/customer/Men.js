import React from 'react';
// import Cart from '~/components/contents/Cart';
// import Detail from '~/components/contents/Detail';
import Preview from '~/components/contents/Preview';
// import ViewAll from '~/components/contents/ViewAlll';
import { useOutletContext } from 'react-router-dom';
const Men = () => {
    const [data, setData] = useOutletContext();
    const { products, types: productTypes } = data;
    console.log(products, productTypes);

    return (
        <div>
            {productTypes?.map((type) => {
                const dataPreview = products.filter((product) => product.Loai === type);

                return <Preview title={type} data={dataPreview} key={type} />;
            })}
        </div>
    );
};

export default Men;
