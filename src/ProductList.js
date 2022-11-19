class ProductList extends React.Component {
    render() {
      const products = this.props.products;
      return products.map(product => (
        <Product
          name={product.name}
          price={product.price}
          productImageUrl={product.productImageUrl}
        />
      ));
    }
  }
  