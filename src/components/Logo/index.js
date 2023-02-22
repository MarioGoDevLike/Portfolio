import "./index.scss"
import myPicture from "../../assets/images/mypicture.png"

const Logo = () => {
    return (
        <div className="picture-container">
            <img className="myPicture" src={myPicture} />
        </div>
    )
}

export default Logo;