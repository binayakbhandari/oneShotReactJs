import "./Home.css"
import Button from "../../components/Button"


function Home(){
    return(
        <>
        <h1>Welcome to Home Page</h1>
        <Button type="Register"/>
        <Button type="Login"/>
        <Button type="Logout"/>
        </>
    )
}

export default Home