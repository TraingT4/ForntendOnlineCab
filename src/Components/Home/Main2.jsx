

import MainFooter from "./MainFooter";
import Section from "./Section";
import NextSection from "./NextSection";
import AboutSection from "./AboutSection";



const Main=()=>{
      
    return(
        <div class="topnav d-flex ">
          <div className="Container-fluid">
        <a class="active btn btn-danger flex-fill" href="/home">Home</a>
        <a className="btn btn-danger flex-fill order-1" href="/info">Info</a>
        <a class="btn btn-light flex-fill" href="/login">Admin Home</a>
        <a class="btn btn-success flex-fill" href="/about">About</a>
        


        
        
        <NextSection/>
     
        <Section/>

        <MainFooter/>
        </div>
      </div>

      
      
    )
}
export default Main;