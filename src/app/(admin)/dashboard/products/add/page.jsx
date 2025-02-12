import React from 'react';
// components
import Toolbar from 'src/components/_admin/toolbar';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AddProduct from 'src/components/_admin/products/addProduct';
import * as api from 'src/services';
export default async function page() {
  const data1 = await api.getAllCategories();
  const data2 = await api.getAllBrands();
  if (!data1 && data2) {
    notFound();
  }
  const { data: categories } = data1;
  const { data: brands } = data2;

  return (
    <div>
      <Toolbar>
        <HeaderBreadcrumbs
          admin
          heading="Product List"
          links={[
            {
              name: 'Dashboard',
              href: '/'
            },
            {
              name: 'Products',
              href: '/dashboard/products'
            },
            {
              name: 'Add Product'
            }
          ]}
        />
      </Toolbar>
      <AddProduct brands={brands} categories={categories} />
    </div>
  );
}
