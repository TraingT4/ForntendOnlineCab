import MainFooter from "./MainFooter";
import Section from "./Section";
import NextSection from "./NextSection";
import AboutSection from "./AboutSection";

const Main=()=>{
      
    return(
      //   <div class="topnav d-flex ">
      //     <div className="Container-fluid">
      //   <a class="active btn btn-danger flex-fill" href="/home">Home</a>
      //   <a className="btn btn-danger flex-fill order-1" href="/info">Info</a>
      //   <a class="btn btn-light flex-fill" href="/adminHome">Admin Home</a>
      //   <a class="btn btn-success flex-fill" href="/about">About</a>
        


        
        
      //   <NextSection/>
     
      //   <Section/>

      //   <MainFooter/>
      //   </div>
      // </div>

      <div >

      <div class="d-flex flex-row bd-highlight  main3 pt-2 pb-2 justify-content-center">
          <div class="p-2">
              <a className="btn btn-dark "style={{marginRight:5}} href="#" role="button">Home</a>
          </div>
          <div class="p-2 bd-highlight">
              <a className="btn btn-dark "style={{marginRight:10}}  href="/login" role="button">Admin Home</a>
          </div>
          <div class="p-2 bd-highlight">
              <a className="btn btn-dark" style={{marginRight:10}} href="/about" role="button">About</a>
          </div>
      </div>
          <NextSection/>
       <Section/>

        <MainFooter/>
        </div>
    

      
      
    )
}
export default Main;