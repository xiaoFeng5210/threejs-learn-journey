import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import StarrySkyBox from "../components/StarrySkyBox"
import { programConfig } from "../router/programsLink"
import WebglTest from "../components/WebglTest01"
const Home = () => {
  
  return (
    <div className="w-screen h-screen">
      <span className="text-black">Home</span>
      <Routes>
        <Route path='/' element={
          <div className="grid grid-cols-4 gap-4">
           {
            programConfig.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <div className="bg-[#D946EF] w-full h-14 text-white rounded-md inline-flex justify-center items-center cursor-pointer">
                    {item.title}
                  </div>
                </Link>
              )
            })
           }
          </div>
        }>
        </Route>
        <Route path='/starry-sky-box' element={<StarrySkyBox />} />
        <Route path='/webgl-test' element={<WebglTest />} />
      </Routes>

    </div>
  )
}
export default Home
