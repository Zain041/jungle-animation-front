import React,{useEffect} from 'react'
import waterfall from './assets/gif/waterfall.gif'
import waterfall2 from './assets/gif/waterfall2.gif'
import waterfall3 from './assets/gif/waterfall3.gif'
import waterfall5 from './assets/gif/waterfall5.gif'
import snake from './assets/gif/snake.gif'
import volcano from './assets/images/volcano/volcano.gif'
import rooster1 from './assets/images/roosterGif/roostergif1.gif'
import rooster2 from './assets/images/roosterGif/roostergif2.gif'
import rooster4 from './assets/images/roosterGif/roostergif7-unscreen.gif'
import tikimask2 from './assets/images/tikimaskGIf/tikimask4.gif'
import tikimask3 from './assets/images/tikimaskGIf/tikimask3.gif'
import vines1 from './assets/images/vines1.png'
import lizard from './assets/images/lizardsGif/lizard2.gif'
import lizard2 from './assets/images/lizardsGif/lizard1.gif'
import tree2 from './assets/images/tree5.png'
import vines2 from './assets/images/vines2.png'
import vines3 from './assets/images/vines3.png'
import road1 from './assets/png/road1.png'
import road2 from './assets/images/front1.jpg'
import road3 from './assets/images/front2.jpg'
import screen2 from './assets/images/screen2.jpg'
import pinetree from './assets/png/pineapple.png'
import lava from './assets/png/lava.png'
import volcanobg from './assets/images/volcano.jpg'
import grass1 from './assets/images/grass2.png'
import vines4 from './assets/png/vines4.png'
import vines5 from './assets/png/vines5.png'
import palm1 from './assets/images/coconut-tree.png'
import palm2 from './assets/images/coconut-tree-1.png'
import tikimasl1 from './assets/gif/tikimask1.gif'
import butterfly1 from './assets/gif/butterfly1.gif'
import butterfly2 from './assets/gif/butterfly2.gif'
import turtle1 from './assets/gif/turtle1.gif'




import monkey1 from './assets/gif/monkey1.gif'


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
         setShow(true)
         setShowSecond(true)
       
           
       
        
        }
        if(isTop==false){
            setShow(true)
            setShowSecond(false)
           
        }
       
       
        
  
    }
    return (
        <div  className="root container-fluid p-0">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">

             
            <div className={` ${show==true?"main":"main"}`} style={{opacity:'',backgroundColor:'transparent'}}>
                <div>
                     <img className="vines1" src={vines1} alt="" srcset=""  />
                     <img  className={`waterfall ${show==true?"d-block":"d-none"}`}  src={waterfall2} alt="" srcset="" />
                     <img className="vines2" src={vines2} alt="" srcset=""  />
                     {/* <img width='200px' src={pinetree} alt="" srcset="" style={{top:'25%',right:'16%',position:'absolute'}} /> */}
                     <img  className={`palm-tree ${show==true?"d-block":"d-none"}`} src={palm1} alt="" srcset=""  />
                     <img  className={`palm-tree1 ${show==true?"d-block":"d-none"}`} src={palm1} alt="" srcset=""  />
                     <img  className={`rooster1 ${show==true?"d-block":"d-none"}`} src={rooster1} alt="" srcset=""  />
                     <img className={`mask ${show==true?"d-block":"d-none"}`}  src={tikimasl1} alt="" srcset=""  />
                     <img className={`butterfly1 ${show==true?"d-block":"d-none"}`}  src={butterfly1} alt="" srcset=""  />
                     <img width='100px' src={butterfly2} alt="" srcset="" style={{top:'9%',left:'0',position:'absolute',zIndex:'51000'}} />
                     <img className="lizard" src="https://www.animatedimages.org/data/media/189/animated-lizard-image-0018.gif" border="0" alt="animated-lizard-image-0072" />
                     <img className={`turtle ${show==true?"d-block":"d-none"}`}  src={turtle1} alt="" srcset=""  />
                    
                     

                </div>
              
              
            </div>
          
           
            </div>
            </div>
            <img className="grass" src={grass1} alt="" srcset=""  />
            <img className="grass1" src={grass1} alt="" srcset=""  />
            <img className="grass2" src={grass1} alt="" srcset=""  />
            <img className="grass3" src={grass1} alt="" srcset=""  />
            <img className="grass4" src={grass1} alt="" srcset=""  />
            <img className="grass5" src={grass1} alt="" srcset=""  />
            <img className="grass6" src={grass1} alt="" srcset=""  />
            <img className="grass7" src={grass1} alt="" srcset=""  />
            <img className="grass8" src={grass1} alt="" srcset=""  />
            <img className="grass9" src={grass1} alt="" srcset=""  />
        
            <div className="row p-0 m-0">
            <div className=" p-0 m-0 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
            <div className="section-2 ">
                <img  className={` ${showSecond==true?"palm-tree2-show":"palm-tree2"}`} src={palm1} alt="" srcset=""  />
                     <img  className={` ${showSecond==true?"palm-tree3-show visible":"palm-tree3 invisible"}`} src={palm1} alt="" srcset=""  />
                     <img className={` ${showSecond==true?"birds visible":"birds invisible"}`} src="https://www.animatedimages.org/data/media/230/animated-bird-image-0238.gif" border="0" alt="animated-bird-image-0238" />
                     <img  className={`rooster2 ${show==true?"d-block":"d-none"}`} src={rooster2} alt="" srcset=""  />
                         <img  className={` ${showSecond==true?"rabbit visible":"rabbit invisible"}`} src="https://www.animatedimages.org/data/media/327/animated-rabbit-image-0088.gif"
                          border="0" alt="animated-rabbit-image-0088" />
                     <img className={` ${showSecond==true?"palm-tree8-show visible":"palm-tree8 insvisible"}`} src={palm1} alt="" srcset=""  />
                     <img className={` ${showSecond==true?"palm-tree9-show visible":"palm-tree9 invisible"}`} src={palm1} alt="" srcset=""  />
                    
                </div>
            </div>
            </div>
            <img className="grass10" src={grass1} alt="" srcset=""  />
            <img className="grass11" src={grass1} alt="" srcset=""  />
            <img className="grass12" src={grass1} alt="" srcset=""  />
            <img className="grass13" src={grass1} alt="" srcset=""  />
            <img className="grass14" src={grass1} alt="" srcset=""  />
            <img className="grass15" src={grass1} alt="" srcset=""  />
            <img className="grass16" src={grass1} alt="" srcset=""  />
            <img className="grass17" src={grass1} alt="" srcset=""  />
            <img className="grass18" src={grass1} alt="" srcset=""  />
            <img className="grass19" src={grass1} alt="" srcset=""  />
            <img className="grass20" src={grass1} alt="" srcset=""  />
            <img className="grass21" src={grass1} alt="" srcset=""  />
            <div className="row p-0 m-0">
            <div className=" p-0 m-0 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
            <div className="section-3 ">
                <img  className={` ${showSecond==true?"palm-tree2-show":"palm-tree2"}`} src={tree2} alt="" srcset=""  />
                     <img  className={` ${showSecond==true?"tikimask2 visible":"palm-tree3 invisible"}`} src={tikimask2} alt="" srcset=""  />
                     <img  className={` ${showSecond==true?"monkey visible":"palm-tree3 invisible"}`} src={monkey1} alt="" srcset=""  />

                     <img  className={` ${showSecond==true?"lizard2 visible":"rabbit invisible"}`} src={lizard}
                          border="0" alt="animated-rabbit-image-0088" />
                          <img  className={` ${showSecond==true?"lizard3 visible":"rabbit invisible"}`} src={lizard2}
                          border="0" alt="animated-rabbit-image-0088" />
                     <img className={` ${showSecond==true?"volcano visible":"palm-tree8 insvisible"}`} src={tree2} alt="" srcset=""  />
                     <img className={` ${showSecond==true?"palm-tree9-show visible":"palm-tree9 invisible"}`} src={tree2} alt="" srcset=""  />
                </div>
            </div>
            </div>
            <img className="grass30" src={grass1} alt="" srcset=""  />
            <img className="grass31" src={grass1} alt="" srcset=""  />
            <img className="grass29" src={grass1} alt="" srcset=""  />
            <img className="grass22" src={grass1} alt="" srcset=""  />
            <img className="grass23" src={grass1} alt="" srcset=""  />
            <img className="grass24" src={grass1} alt="" srcset=""  />
            <img className="grass25" src={grass1} alt="" srcset=""  />
            <img className="grass26" src={grass1} alt="" srcset=""  />
            <img className="grass27" src={grass1} alt="" srcset=""  />
            <img className="grass28" src={grass1} alt="" srcset=""  />
            <img className="grass24" src={grass1} alt="" srcset=""  />
            <img className="grass23" src={grass1} alt="" srcset=""  />
            <img className="grass22" src={grass1} alt="" srcset=""  />
            <div className="row p-0 m-0">
            <div className=" p-0 m-0 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
            <div className="section-4 ">
                {/* <img  className={` ${showSecond==true?"palm-tree2-show":"palm-tree2"}`} src={tree2} alt="" srcset=""  /> */}
                     {/* <img  className={` ${showSecond==true?"tikimask2 visible":"palm-tree3 invisible"}`} src={tikimask2} alt="" srcset=""  />
                     <img  className={` ${showSecond==true?"lizard2 visible":"rabbit invisible"}`} src={lizard}
                          border="0" alt="animated-rabbit-image-0088" />
                          <img  className={` ${showSecond==true?"lizard3 visible":"rabbit invisible"}`} src={lizard2}
                          border="0" alt="animated-rabbit-image-0088" /> */}
                     <img className={` ${showSecond==true?"volcano1 visible":"palm-tree8 insvisible"}`}  src={volcano} alt="" srcset=""  />
                     <img className={` ${showSecond==true?"tikimask-left visible":"tikimask invisible"}`} src={tikimask3} alt="" srcset=""
                     
                     
                     />
                     <img  className={`rooster4 ${show==true?"d-block":"d-none"}`} src={rooster4} alt="" srcset=""  />
                      <img className={` ${showSecond==true?"tikimask-right visible":"tikimask invisible"}`} src={tikimask3} alt="" srcset=""
                     
                     />
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default Home
