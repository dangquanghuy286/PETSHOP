import { useNavigate } from "react-router-dom";
import "./GoBack.scss"
function GoBack() {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate(-1)
    }
    return (
        <>

            <button className="button__back" onClick={handleOnclick}>Trở lại</button>


        </>
    )
}
export default GoBack;