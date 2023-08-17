import aboutus1 from '../images/vdu.jpg';
import aboutus2 from '../images/mouse.jpg';
import aboutus3 from '../images/chip.jpg';
import aboutus4 from '../images/signal.jpg';
import aboutus5 from '../images/laptops2.jpg';

const Aboutus =() => {
    return (
      
    <div class="myContainer">
        <h1>Why Us?</h1>
        <p class="specific">Your ingenious ideas. Our state-of-the-art <br/>
            web development.
        </p>
        <div class="myheader">
        <div class="col-12-col-md-6"> 
        <div class="myimg"><img src={aboutus1} width="35px" alt=""/></div>
               <div class="myheadertxt">  <h4 class="text-white"><bold>Best Ideas </bold></h4>    
                    <p>Bring us your wildest ideas and with our creative mindset
                    and tools we will make it happen. Our team will provide you
                    with a unique site designed for your specific needs and 
                    help you develop an online business strategy to outplay
                    your competitors.</p>
               </div>     
        </div>

        <div class="col-12-col-md-6">
        <div class="myimg"><img src={aboutus2} width="35px" alt=""/></div>
                <div class="myheadertxt"> <h4 class="text-white content3"><bold>Support 24/7 </bold></h4> <p>We will help you convert your visitors into clients and 
                increase your revenue.</p>
                </div>       
        </div>
        </div>

        <div class="myheader">
        <div class="col-12-col-md-6 ">
            <div class="myimg"><img src={aboutus3} width="35px" alt=""/></div>
            <div class="myheadertxt"> <h4 class="text-white"><bold>Professional team</bold></h4>    
                <p>We are a professional web development company with a 
                    team of tech savvies who are always on top of the latest
                    trends in web development, web design, SEO and 
                    marketing.</p>
            </div>   
          </div>     

        <div class="col-12-col-md-6">
            <div class="myimg"><img src={aboutus4} width="35px" alt=""/></div>
            <div class="myheadertxt" > <h4 class="text-white "><bold>Quick work</bold></h4>    
            <p>We are result-oriented and passionate about each of our 
                    projects and "OK" is not good enough for us.</p>
           </div>  
        </div>

    </div>

    <div class="myfooter">
        <div class="col-12-col-sm-4 text-success">
            <h4>Industry Expertise +</h4>    
            <h4>Laser-Focused Team =</h4>
            <h1><bold>SUCCESS</bold></h1>
        </div>
        <div class="col-12-col-sm-4 mysmalltxt">
        <p>Businesses know that a single, full-time marketing manager simply
                cannot perform all the roles in digital marketing. Comrades Web Agency
                positions itself as your digital marketing partner: we cover all
                aspects of your website,branding, digital marketing strategy, and data
                analysis, all while owning our results leads, calls, sales,conversions,
                targeted traffic, etc.</p>

        </div>
        <div class="col-12-col-sm-4"><img src={aboutus5}/></div>

    </div>

    </div>

    );
  }
  
  export default Aboutus;