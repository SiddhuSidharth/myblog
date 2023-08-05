import Header from "./Header"
import {Outlet} from "react-router-dom"
//Outlet to navigate the elements
export default function Layout(){
      return (
            <main>
                  <Header />
                  <Outlet />
            </main>
      )
}