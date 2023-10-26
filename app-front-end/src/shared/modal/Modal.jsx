import { useSelector } from "react-redux"
import style from "./Style.module.css"

const Modal = (props) => {


    const handleClose = () =>{
        props.onClose()
        
    }


    return(<>


        <div className={style.allModal} onClick={handleClose}>
            <div  className={style.modalContent} onClick={(e)=>e.stopPropagation()}>
                <button onClick={handleClose}>X</button>
                {props.children}
            </div>
        </div>



    
    </>)
}
export default Modal