import React,{useState} from 'react';
import ListSupplies from '../components/ListSupplies';
import Order from '../components/Order';

const Main = () => {
  const [cart, SetCart] = useState([])
  console.group(cart,'cart')

  const Add = (id) =>{
    console.log(`id ${id}`)
    if(cart.filter(ct => ct.id === id).length > 0){
      const new_cart = cart.map(ct=> (ct.id === id)? {id:id,count:ct.count + 1}: ct )
      SetCart(new_cart)
    }else{
      SetCart(
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
        <h4 className="pb-3 pt-3">Restaurant Siglo XXI</h4>
      <div className="row">
          <div className="col-lg-7 bg-success ">
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