import React, { useEffect } from "react"
import "./Home.css"
import * as THREE from "three"
import moonImage from "../../images/moon.jpg"
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/space.jpg"
import { Typography } from "@mui/material"
import TimeLine from "../TimeLine/TimeLine"
import YoutubeCard from "../YoutubeCard/YoutubeCard"


import { SiReact,
SiJavascript,
SiHtml5,
SiCss3,
SiMysql,
SiSpringboot,
SiExpress,
SiNodedotjs,
SiMongodb,
SiThreedotjs,
SiAtom
} from "react-icons/si"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"





const Home = () => {
  const {user} = useSelector((state) =>  state.user)

  useEffect(()=>{
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    


    const textureLoader = new THREE.TextureLoader()
    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)
    const spaceTexture = textureLoader.load(spaceImage)

    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({canvas});
    
    //moon
    const moonGeometry = new THREE.SphereGeometry( 1.5, 64, 64 ); 
    const moonMaterial = new THREE.MeshStandardMaterial( { map : moonTexture } ); 
    const moon = new THREE.Mesh( moonGeometry, moonMaterial );
    //moon.position.set(3, 3, 2.5); 
    const pointLight1 = new THREE.PointLight( 0xffffff, 1);
    

    //venus
    const venusGeometry = new THREE.SphereGeometry( 3, 64, 64 ); 
    const venusMaterial = new THREE.MeshStandardMaterial( { map : venusTexture } ); 
    const venus = new THREE.Mesh( venusGeometry, venusMaterial ); 
    venus.position.set(8, 5, 5);
    const pointLight2 = new THREE.PointLight( 0xffffff, 0.1);
    

    //position
    camera.position.set(4,4,8)
    pointLight1.position.set(10,10,6)
    pointLight2.position.set(-10,-10,-6)

    //calling
    scene.add(moon)
    scene.add( venus )
    scene.add( pointLight1 );
    scene.add( pointLight2 )
    scene.background=spaceTexture
const constSpeed = 0.01
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2 ){
         moon.rotation.x -= constSpeed
         moon.rotation.y += constSpeed
         venus.rotation.x -= constSpeed
         venus.rotation.y += constSpeed
     }
     if(e.clientX > window.innerWidth / 2){
      moon.rotation.x -= constSpeed
      moon.rotation.y -= constSpeed
      venus.rotation.x -= constSpeed
      venus.rotation.y -= constSpeed
     }

     if(e.clientY > window.innerHeight / 2){
      moon.rotation.x -= constSpeed
      moon.rotation.y += constSpeed
      venus.rotation.x -= constSpeed
      venus.rotation.y += constSpeed
     }
     if (e.clientY <= window.innerHeight / 2 ){
      moon.rotation.x -= constSpeed
      moon.rotation.y -= constSpeed
      venus.rotation.x -= constSpeed
      venus.rotation.y -= constSpeed
  }
  })
    const animate = () => {
      requestAnimationFrame(animate)
      moon.rotation.y+=0.001
      venus.rotation.y+=0.001
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.render(scene,camera)
    }
   animate()

   return window.addEventListener("scroll", () => {
    camera.rotation.z = window.scrollY * 0.001;
    camera.rotation.y = window.scrollY * 0.003;

    
  })
  },[])

 



  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant='h1'>
          <p>S</p>
          <p>A</p>
          <p>I</p>
          <br/> 
          <p>K</p>
          <p>I</p>
          <p>R</p>
          <p>A</p>
          <p>N</p>
          <br/> 
          <p>G</p>
          <p>A</p>
          <p>D</p>
          <p>I</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">CONTENT-CREATER</Typography>
        </div>
        <Link to="/projects">VIEW PROJECTS</Link>
        <Link to="/about">ABOUT ME</Link>

      </div>
      <div className="homeScrollBtn">
        <SiAtom/>
        </div>



      <div className="homeContainer">
      <Typography variant="h3">TimeLine</Typography>
      <TimeLine timelines/>
    </div>

    
    <div className="homeSkills">
    <Typography variant="h3">SKILLS</Typography>
    <div className="homeCubeSkills">
      <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
      <img src={user?.skills.image1.url} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src={user?.skills.image2.url} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
      <img src={user?.skills.image3.url} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
      <img src={user?.skills.image4.url} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
      <img src={user?.skills.image5.url} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
      <img src={user?.skills.image6.url} alt="" />
      </div>
      
      </div>
      <div className="cubeShadow"></div>

      <div className="homeSkillsBox" id="homeskillsBox">
      <SiReact/>
        <SiJavascript/>
        <SiHtml5/>
        <SiCss3/>
        <SiMysql/>
        <SiSpringboot/>
        <SiExpress/>
        <SiNodedotjs/>
        <SiMongodb/>
        <SiThreedotjs/>
      </div>
      </div>
      <div className="homeYoutube">
  <Typography variant="h3">YOUTUBE VIDEOS</Typography>

  <div className="homeYoutubeWrapper">
    <YoutubeCard />

  
  </div>
  
</div>
</div> 
  )
}

export default Home
