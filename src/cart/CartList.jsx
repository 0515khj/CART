import CartItem from "./CartItem";



const CartList = ({data , onDel , onDelAll,onEdit,all}) => {

    return (
        <div className="con2">
            <p>
                <button  className="btn" onClick={onDelAll} >전체삭제</button>
                <span className="total">
                    총금액 : {all}원
                    
                    
                </span>
            </p>        
            <ul className="list">
               {
                data.map(item=><CartItem key={item.id} item={item} onDel={onDel} onEdit={onEdit}
                   />)
               }
            </ul>
        </div>
    );
};

export default CartList;

