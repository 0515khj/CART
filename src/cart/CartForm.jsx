import { useState } from "react";

const CartForm = ({onSubmit,cart,cp,textref,isEdit}) => {
    const {text,price,amount} = cart
    const [isShow ,setIsShow] =useState(false)

    

    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">품목</label>
                    <input type="text" value={text} name="text"onChange={cp} ref={textref}/>
                </p>
                <p>
                    <label htmlFor="">가격</label>
                    <input type="number" value={price} name="price" onChange={cp} ref={textref}/>
                </p>
                <p>
                    <label htmlFor="">수량</label>
                    <input type="number" value={amount} name="amount" onChange={cp} ref={textref} />
                </p>
                <p>
                    <button type="submit">
                     {
                        isEdit ? '수정':'등록'
                     }
                    </button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;