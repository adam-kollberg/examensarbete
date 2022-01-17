import React from "react";
import {Grid} from "@material-ui/core"

import Product from "./Product/Product";

const products = [
    {id: 1, name: "shoes", description: "running Shoes", price: "122 sek", image: "https://pricespy-75b8.kxcdn.com/product/standard/280/5223961.jpg" },
    {id: 2, name: "Macbook pro",description: "apple", price: "1211 sek", image: "https://pricespy-75b8.kxcdn.com/product/standard/280/5223961.jpg" },
     
];

const Products = () => {
    return(
<main>
<Grid container justify="center" spacing= {4}>
 {products.map((product)=> (
  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>

<Product product={product} />

</Grid>
 ))}

</Grid>



</main>



    )


}


export default Products;