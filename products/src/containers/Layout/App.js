import React from 'react';
import './App.css';

import Navbar from '../../components/Navigation/Navbar'
import TableBody from '../../components/Table/TableBody'
import TableHead from '../../components/Table/TableHead'
import AddProductButton from '../../components/AddProductButton/AddProductButton'
import EditProduct from '../../components/Add-Edit/EditProduct'

class App extends React.Component {
  state = {
    products: [
      {
        id: Math.random() * 10,
        name: "Coca-cola",
        description: "Gazirano",
        price: 5
      },
      {
        id: Math.random() * 10,
        name: "Fanta",
        description: "Gazirano",
        price: 4
      }
    ],
    showEditProduct: false
  }

  showEditProduct = () => {
    let showEdit = this.state.showEditProduct;
    this.setState({ showEditProduct: !showEdit })
  }

  deleteProduct = (id) => {
    const newProducts = [...this.state.products]
    newProducts.splice(id, 1);
    this.setState({ products: newProducts })
  }

  render() {
    const table = this.state.products.map(product => {
      return (<TableBody key={product.id} id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        deleteProduct={() => this.deleteProduct(product.id)}
        showEditProduct={this.showEditProduct}
      />)
    })

    return (
      <div className="App">
        <Navbar />
        <TableHead>
          {table}
        </TableHead>
        <AddProductButton />
        {this.state.showEditProduct ? <EditProduct name={this.state.name}
          description={this.state.description}
          price={this.state.price} /> : null}
      </div>
    )
  }
}

export default App;
