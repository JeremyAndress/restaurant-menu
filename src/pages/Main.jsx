import React,{useState} from 'react';
import ListSupplies from '../components/ListSupplies';
import Order from '../components/Order';

const Main = () => {
  const [cart, SetCart] = useState([])
  console.group(cart,'cart')

  const Add = (id,stock) =>{
    console.log(`id ${id} stock ${stock}`)
    if(cart.filter(ct => ct.id === id).length > 0){
      const new_cart = cart.map(ct=> {
        // (ct.id === id)? {id:id,count:ct.count + 1}: ct 
        if(ct.id === id){
          const count = ct.count + 1
          if(count > stock){
            alert('No hay mas Stock');
            return ct
          }
          return {id:id,count:count}
        }else{
          return ct
        }
      })
      SetCart(new_cart)
    }else{
      stock && SetCart(
        cart.concat({id:id, count: 1})
      )
    }
  }
  const Remove = (id) =>{
    if(cart.filter(ct=> ct.id === id).length > 0){
      const new_cart = cart.map(ct=> {
        if(ct.id === id){
          const count = ct.count - 1
          if(count > 0){
            return { id: id, count:count }
          }else{ return null }
        }else{ return ct }
      }).filter(ct=> ct && ct)
      SetCart(new_cart)
    }
  }
  return (
      <div className="container-fluid">
        <p className="pb-3 pt-3 h4 font-uber-move-medium">Restaurant <strong className="text-success">Siglo XXI</strong></p>
        <hr/>
      <div className="row">
          <div className="col-lg-7  ">
            <ListSupplies add={Add} remove={Remove}/>
          </div>
          <div className="col-lg-5 bg-warning">
              <div className="menu-without">
                <Order cart={cart}/>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Main;