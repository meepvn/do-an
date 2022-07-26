import React from 'react';
import AdminLayout from '~/components/Layouts/AdminLayout';
import CustomerTable from '~/components/contents/AdminContents/CustomerTable';
const Customer = () => {
    return (
        <AdminLayout>
            <CustomerTable />
        </AdminLayout>
    );
};

export default Customer;
