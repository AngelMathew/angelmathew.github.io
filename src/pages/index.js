import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header/header"
import Info from "../components/Info/Info"
import Contact from "../components/Contact/Contact"
import { useEffect,useState } from "react"
import Splash from "../components/SplashScreen/Splash"

const IndexPage = () => {
 
const[isLoading,setisLoading]=useState(true)
useEffect(() => {
 setTimeout(()=>{
   setisLoading(false)
 },2000)
}, [])
  return (
    <Layout title="Angel Anna Mathew">
      {isLoading ? (
        <>
        <Splash/></>
      
       ) : 
      (
        <>
        <header>
          <Header />
        </header>
  
        <main>
          <Info />
        </main>
  
        <footer>
        <Contact/>
        </footer>
        </>
      )} 
      
    </Layout>
  )
}

export default IndexPage
