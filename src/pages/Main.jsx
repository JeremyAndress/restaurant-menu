import React,{useState} from 'react';
import ListSupplies from '../components/ListSupplies';
import Order from '../components/Order';

const Main = () => {
  const [cart, SetCart] = useState([])
  console.group(cart,'cart')

  const CleanCart = () => SetCart([]);

  const Add = (supplies,stock) =>{
    console.log(`id ${supplies.id} stock ${stock}`)
    if(cart.filter(ct => ct.id === supplies.id).length > 0){
      const new_cart = cart.map(ct=> {
        // (ct.id === id)? {id:id,count:ct.count + 1}: ct 
        if(ct.id === supplies.id){
          const count = ct.count + 1
          if(count > stock){
            alert('No hay mas Stock');
            return ct
          }
          return { ...ct,count:count}
        }else{
          return ct
        }
      })
      SetCart(new_cart)
    }else{
      stock && SetCart(
        cart.concat({
          id:supplies.id, price: supplies.price
          ,count: 1, name: supplies.name
        })
      )
    }
  }
  const Remove = (id) =>{
    if(cart.filter(ct=> ct.id === id).length > 0){
      const new_cart = cart.map(ct=> {
        if(ct.id === id){
          const count = ct.count - 1
          if(count > 0){
            return { ...ct, count:count }
          }else{ return null }
        }else{ return ct }
      }).filter(ct=> ct && ct)
      SetCart(new_cart)
    }
  }
  const CleanLocalStorage = () =>{
    localStorage.removeItem("order");
    window.location.reload();
  }
  return (
      <div className="container-fluid">
        <p onClick={CleanLocalStorage}  className="pb-3 pt-3 h3 font-uber-move-medium">Restaurant <strong className="text-success">Siglo XXI</strong></p>
        <hr/>
      <div className="row">
          <div className="col-lg-7  ">
            <ListSupplies add={Add} remove={Remove}/>
          </div>
          <div className="col-lg-5 ">
              <div className="menu-without">
                <Order cart={cart} clean={CleanCart}/>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Main;