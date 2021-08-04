import React,{useEffect} from 'react'
import waterfall from './assets/gif/waterfall.gif'
import waterfall2 from './assets/gif/waterfall2.gif'
import waterfall3 from './assets/gif/waterfall3.gif'
import waterfall5 from './assets/gif/waterfall5.gif'
import snake from './assets/gif/snake.gif'
import vines1 from './assets/images/vines1.png'
import vines2 from './assets/images/vines2.png'
import vines3 from './assets/images/vines3.png'
import road1 from './assets/png/road1.png'
import road2 from './assets/images/front1.jpg'
import road3 from './assets/images/front2.jpg'
import screen2 from './assets/images/screen2.jpg'
import pinetree from './assets/png/pineapple.png'
import vines4 from './assets/png/vines4.png'
import vines5 from './assets/png/vines5.png'
import palm1 from './assets/images/coconut-tree.png'
import palm2 from './assets/images/coconut-tree-1.png'
import tikimasl1 from './assets/gif/tikimask1.gif'
import butterfly1 from './assets/gif/butterfly1.gif'
import butterfly2 from './assets/gif/butterfly2.gif'
import turtle1 from './assets/gif/turtle1.gif'




import monkey from './assets/gif/monkey.gif'


import AOS from 'aos'
import "aos/dist/aos.css";
import "./home.css"
const Home = () => {
    const [show,setShow]= React.useState(true)
    const [showSecond,setShowSecond]= React.useState(false)
    const [showThird,setShowThird]= React.useState(false)
    useEffect(()=>{
        
       
            window.addEventListener('scroll', handleScroll);
       
        
       
       
    },[])
     
    const handleScroll=(event)=>{
	
			
        const isTop = window.scrollY > 250;
        
        const isTop3=window.scrollY > 1100;
       
        if(isTop==true){
         setShow(false)
         setShowSecond(true)
       
           
       
        
        }
        if(isTop==false){
            setShow(true)
            setShowSecond(false)
           
        }
       
       
        
  
    }
    return (
        <div  className="root">
            <div className={` ${show==true?"main":"main-2"}`} style={{opacity:'',backgroundColor:'transparent'}}>
                <div>
                     <img width='300px' src={vines1} alt="" srcset="" style={{top:'0','left':'0',position:'fixed'}} />
                     <img  className={`waterfall ${show==true?"d-block":"d-none"}`}  src={waterfall2} alt="" srcset="" />
                     <img width='300px' src={vines2} alt="" srcset="" style={{top:'0',right:'0',position:'fixed',filter: `brightness${120}%`}} />
                     {/* <img width='200px' src={pinetree} alt="" srcset="" style={{top:'25%',right:'16%',position:'absolute'}} /> */}
                     <img  className={`palm-tree ${show==true?"d-block":"d-none"}`} src={palm1} alt="" srcset=""  />
                     <img  className={`palm-tree1 ${show==true?"d-block":"d-none"}`} src={palm1} alt="" srcset=""  />
                    
                     <img className={`mask ${show==true?"d-block":"d-none"}`}  src={tikimasl1} alt="" srcset=""  />
                     <img className={`butterfly1 ${show==true?"d-block":"d-none"}`}  src={butterfly1} alt="" srcset="" s />
                     <img width='100px' src={butterfly2} alt="" srcset="" style={{top:'9%',left:'0',position:'absolute'}} />
                     <img className="lizard" src="https://www.animatedimages.org/data/media/189/animated-lizard-image-0018.gif" border="0" alt="animated-lizard-image-0072" />
                     <img className={`turtle ${show==true?"d-block":"d-none"}`}  src={turtle1} alt="" srcset=""  />
                     

                </div>
                <div className="section-2 ">
                <img  className={` ${showSecond==true?"palm-tree2-show":"palm-tree2"}`} src={palm1} alt="" srcset=""  />
                     <img  className={` ${showSecond==true?"palm-tree3-show visible":"palm-tree3 invisible"}`} src={palm1} alt="" srcset=""  />
                     <img className={` ${showSecond==true?"birds visible":"birds invisible"}`} src="https://www.animatedimages.org/data/media/230/animated-bird-image-0238.gif" border="0" alt="animated-bird-image-0238" />
                   
                         <img  className={` ${showSecond==true?"rabbit visible":"rabbit invisible"}`} src="https://www.animatedimages.org/data/media/327/animated-rabbit-image-0088.gif"
                          border="0" alt="animated-rabbit-image-0088" />
                     <img className={` ${showSecond==true?"palm-tree8-show visible":"palm-tree8 insvisible"}`} src={palm1} alt="" srcset=""  />
                     <img className={` ${showSecond==true?"palm-tree9-show visible":"palm-tree9 invisible"}`} src={palm1} alt="" srcset=""  />
                </div>
              
            </div>
             
        </div>
    )
}

export default Home
