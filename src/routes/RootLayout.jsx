import { Outlet } from "react-router-dom"; //placeholder for nested routes (where children routes should be rendered)
import MainHeader from "../components/MainHeader";

function RootLayout(){
    return(
        <>
            <MainHeader />
            <Outlet /> 
        </>
    );
}

export default RootLayout;