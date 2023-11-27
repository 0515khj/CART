import './style.scss'
import CartForm from './CartForm';
import CartList from './CartList';
import { useEffect, useRef, useState } from 'react';

const Cart = () => {

    const [data , setData]=useState([
        // {id :1 , text:'' ,  price:200 , amount:2}
    ])
    const [isEdit , setIsEdit] = useState(false)
    const [all , setAll]= useState(0)
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
        if(!cart.text || cart.amount < 1) return
        if(isEdit) {
            setData(data.map(item => item.id === cart.id ? cart : item))
            setIsEdit(false)
        }else{
            cart.id = no.current++
            setData([...data,cart])
        }
            setCart({text:'',price:'',amount:''})
            textref.current.focus();
            setAll(cart.price * cart.amount)
    }

    useEffect(()=>{
        setAll(data.map(item => item.price * item.amount).reduce((a1, a2) => a1 + a2, 0));
    })

     const onDel =(id)=>{
        setData(data.filter(item=> item.id !==id))
     }

     const onDelAll =()=>{
       setData([])      // 전체삭제 존나간단함 
     }

     const onEdit =(id) =>{
        setIsEdit(!isEdit)
        // setCart(data[id-1])
        setCart(data.find(item => item.id === id))
     }


    return (
        <>
            <div className="con-box">
                <CartForm onSubmit={onSubmit} cp={cp} cart={cart} textref={textref} isEdit={isEdit} />
                <CartList data={data} onDel={onDel} onDelAll={onDelAll} onEdit={onEdit} all={all} />
            </div>
        </>
    );
};

export default Cart;