import './style.scss'
import CartForm from './CartForm';
import CartList from './CartList';
import { useRef, useState } from 'react';

const Cart = () => {

    const [data , setData]=useState([
        // {id :1 , text:'' ,  price:200 , amount:2}
    ])



    const [ cart , setCart]=useState({
        text:'' , price:'', amount:''
    })

    const no = useRef(1)
    const textref = useRef()

    const cp = (e) =>{
        const {name , value} = e.target
        setCart({
            ...cart,
            [name]:value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        //텍스트가 공백이고 수량이 1보다 작으면 return 처리
        if(!cart.text && cart.amount < 1) return

        cart.id = no.current++
        setData([
            ...data,
            cart
        ])
        setCart({
            text:'',price:'',amount:''
        })
        textref.current.focus();
    }

     const onDel =(id)=>{
        setData(data.filter(item=> item.id !==id))
     }

     const onDelAll =()=>{
       setData([])      // 전체삭제 존나간단함 그냥 공백처리로 만들어버리면댐
     }




    return (
        <>
            <div className="con-box">
                <CartForm onSubmit={onSubmit} cp={cp} cart={cart} textref={textref}/>
                <CartList data={data} onDel={onDel} onDelAll={onDelAll}/>
            </div>
        </>
    );
};

export default Cart;