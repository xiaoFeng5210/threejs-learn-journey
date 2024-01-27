import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import StarrySkyBox from "../components/StarrySkyBox"

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <span className="text-black">Home</span>
      <Routes>
        <Route path='/' element={
          <div className="w-full h-full bg-gray-100 grid grid-cols-4 gap-4">
            <Link to='/starry-sky-box'>
              <div className="bg-[#D946EF] w-full h-14 text-white rounded-md inline-flex justify-center items-center cursor-pointer">
                星空
              </div>
            </Link>
          </div>
        }>
        </Route>
        <Route path='/starry-sky-box' element={<StarrySkyBox />} />
      </Routes>

    </div>
  )
}
export default Home
