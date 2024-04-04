import AllPhone from "./Page/AllPhone/page";
import Footer from "./Page/Footer/page";
import Heading from "./Page/Heading/page";
import MenuItem from "./Page/Menu/page";
import NavbarComponent from "./Page/Navber/page";

import Templates from "./Page/Templates/page";
export default function Home() {
  return (
    <div>
      <NavbarComponent/>
      <Heading></Heading>
      <h3>Templates</h3>
      <Templates></Templates>
      <h3 className="mt-5">Screens</h3>
      <MenuItem></MenuItem>
      <AllPhone></AllPhone>
      <Footer></Footer>
    </div>
    
  );
}
