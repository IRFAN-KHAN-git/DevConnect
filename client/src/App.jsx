
import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Discussions from '../components/Discussion/Discussions'
import Post from '../components/Post/Post'

import TermsOfService from '../TermAndCondition/TermsOfService'
import PrivacyPolicy from '../TermAndCondition/PrivacyPolicy'
import ComingSoon from '../pages/CommingSoon/ComingSoon'
import Profile from '../components/Profile/Profile'




 const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>  
          <Route path="/discussions" element={<Discussions/>} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoon/>} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </Layout>
          
          
          
    </BrowserRouter>
  )
}
export default App;
