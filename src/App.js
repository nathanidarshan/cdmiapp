import './App.css';
import mylogo from './images/cdmilogo.svg';
import { MdOutlineMail } from "react-icons/md";
import { FaCertificate, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp, FaHandPointRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import myslider from './images/slider1.jpeg';
import mycoursimage from './images/coursimage.webp';
import mycoursimage2 from './images/coursimage2.webp';
import mycoursimage3 from './images/coursimage3.webp';
import mycoursimage4 from './images/coursimage4.webp';
import mycoursimage5 from './images/coursimage5.webp';
import mycoursimage6 from './images/coursimage6.webp';
import { GoArrowRight } from "react-icons/go";
import ceoonar from './images/main.webp';
import happystudent from './images/happystude.png';
// import counter from './images/counter.png';
import { RiDoubleQuotesR } from "react-icons/ri";
import hsimg from "./images/hsimg.jpg";
import { GiTeacher } from "react-icons/gi";
import studentpalsment from "./images/plasmentimg.png";
import studentpalsment2 from "./images/plasmentimg2.png";
import studentpalsment3 from "./images/plasmentimg3.png";
import studentpalsment4 from "./images/plasmentimg4.png";
import studentpalsment5 from "./images/plasmentimg5.png";
import studentpalsment6 from "./images/plasmentimg6.png";
import footerlogo from "./images/footerlogo.svg";
import { AiOutlineBank } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";


function App() {
  return (
    <section>
      <div className="maininfo">
        <div className="container">
          <div className="flax">
            <div className="flax">
              <p><a><MdOutlineMail></MdOutlineMail></a>info@cdmi.in</p>
              <p><a><FaCertificate></FaCertificate></a>Verify Certificate</p>
            </div>
            <div>
              <p>HAVE ANY QUESTION ? +91 90333 16003</p>
            </div>
            <div className="icon">
              <a><FaFacebookF></FaFacebookF></a>
              <a><FaTwitter></FaTwitter></a>
              <a><TiSocialGooglePlus></TiSocialGooglePlus></a>
              <a><FaLinkedin></FaLinkedin></a>
              <a><TiSocialInstagram></TiSocialInstagram></a>
              <a><CiYoutube></CiYoutube></a>
              <a><FaWhatsapp></FaWhatsapp></a>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="header">
        <div className="container">
          <div className="flax">
            <div className="logo">
              <img src={mylogo}></img>
            </div>
            <nav className="">
              <ul className="flax manu">
                <li><a href=''>HOME</a></li>
                <li><a href=''>COURSES<FaAngleDown className="icon1"></FaAngleDown></a></li>
                <li><a href=''>ACTIVITES<FaAngleDown className="icon1"></FaAngleDown></a></li>
                <li><a href=''>BLOG</a></li>
                <li><a href=''>KNOW US<FaAngleDown className="icon1"></FaAngleDown></a></li>
                <li><a href=''>STUDENT ZONE<FaAngleDown className="icon1"></FaAngleDown></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="spas">
        <img className="slider" src={myslider}></img>
      </div>

      {/* CREATIVE COURSE */}
      <div className="container">
        <div className="coursname">
          <div className="first">CREATIVE COURSE</div>
          <div className="second">OFFERED COURSES</div>
        </div>
        <div className="flax">
          <div className="cimage">
            <div className="cfirst">
              <img src={mycoursimage}></img>
              <div className="cname">Development Courses</div><hr></hr>
              <div className="flax">
                <div className="star">
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt ></FaStarHalfAlt>
                </div>
                <div className="button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cimage">
            <div className="cfirst">
              <img src={mycoursimage2}></img>
              <div className="cname">Design Courses</div><hr></hr>
              <div className="flax">
                <div className="star">
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt ></FaStarHalfAlt>
                </div>
                <div className="button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cimage">
            <div className="cfirst">
              <img src={mycoursimage3}></img>
              <div className="cname">Programming IT</div><hr></hr>
              <div className="flax">
                <div className="star">
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt ></FaStarHalfAlt>
                </div>
                <div className="button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flax">
          <div className="cimage">
            <div className="cfirst">
              <img src={mycoursimage4}></img>
              <div className="cname">Trendy Courses</div><hr></hr>
              <div className="flax">
                <div className="star">
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt ></FaStarHalfAlt>
                </div>
                <div className="button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cimage">
            <div className="cfirst">
              <img src={mycoursimage5}></img>
              <div className="cname">Civil-Mech. Engineering</div><hr></hr>
              <div className="flax">
                <div className="star">
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt ></FaStarHalfAlt>
                </div>
                <div className="button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cimage">
            <div className="cfirst">
              <img src={mycoursimage6}></img>
              <div className="cname">Business Development</div><hr></hr>
              <div className="flax">
                <div className="star">
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt ></FaStarHalfAlt>
                </div>
                <div className="button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spas">
          <button className="btn">View All Courses<GoArrowRight className="arrow"></GoArrowRight></button></div>
      </div>


      {/* <div className="container"> */}
      <div className="sec_2">
        <div className="detail">
          <div className="space"></div>
          <span className="contain">ABOUT US</span>
          <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
          <p className="contant">Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
          <div className="Cbutton">
            <a href="">Enroll Now...!<GrFormNextLink className="arrow"></GrFormNextLink></a>
          </div>
        </div>
        <div className="sec_2">
          <img src={ceoonar}></img>
        </div>
      </div>

      {/* </div> */}

      {/*  */}
      <div className="bgimage">
        <div className="container">
          <div className="flax spas1">
            <div className="bigicon">
              {/* <img width={"100px"} height={"100px"} src={counter.png}></img> */}
              <div className="bidiskrab">18000+</div>
              <div className="bidiskrab1">HAPPY STUDENTS</div>
            </div>
            <div className="bigicon">
              <div className="bidiskrab">10+</div>
              <div className="bidiskrab1">CERTIFICATION APPROVAL</div>
            </div>
            <div className="bigicon">
              <div className="bidiskrab">100+</div>
              <div className="bidiskrab1">CERTIFIED TEACHERS</div>
            </div>
            <div className="bigicon">
              <div className="bidiskrab">12000+</div>
              <div className="bidiskrab1">STUDENTS PLACED</div>
            </div>
          </div>
        </div>
      </div>

      {/* happy student alumni speak */}
      <div className="container">
        <div className="flax">
          <div className="hastudent">
            <div className="happys">HAPPY STUDENTS</div>
            <div className="hstud">ALUMNI SPEAK</div>
            <div><RiDoubleQuotesR className="hsditeil"></RiDoubleQuotesR></div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="d-flax">
              <img className="hsimg" src={hsimg}></img>
              <div className="stuname" >Patel harsh <br></br> Nodejs Devloper</div>
            </div>
          </div>
          <div >
            <img width={"100%"} src={happystudent}></img>
          </div>
        </div>
        <div className="spas"></div>
      </div>

      {/* READ OUR DIFFERENCE */}
      <div className="container">
        <div className="coursname">
          <div className="first">READ OUR DIFFERENCE</div>
          <div className="second">WHY CHOOSE CREATIVE</div>
        </div>
        <div className="flax">
          <div className="readimage">
            <p><GiTeacher className="icon5"></GiTeacher></p>
            <div>
              <h4>Industry Experts As Trainers</h4>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
          <div className="readimage">
            <p><GiTeacher className="icon5"></GiTeacher></p>
            <div>
              <h4>Industry Experts As Trainers</h4>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
          <div className="readimage">
            <p><GiTeacher className="icon5"></GiTeacher></p>
            <div>
              <h4>Industry Experts As Trainers</h4>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
        </div>
        <div className="flax">
          <div className="readimage">
            <p><GiTeacher className="icon5"></GiTeacher></p>
            <div>
              <h4>Industry Experts As Trainers</h4>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
          <div className="readimage">
            <p><GiTeacher className="icon5"></GiTeacher></p>
            <div>
              <h4>Industry Experts As Trainers</h4>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
          <div className="readimage">
            <p><GiTeacher className="icon5"></GiTeacher></p>
            <div>
              <h4>Industry Experts As Trainers</h4>
              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
        </div>
        <div className="spas"></div>
      </div>
      <div className="container">
        <div className="coursname">
          <div className="first">STUDENT PLACEMENT</div>
          <div className="second">OUR RECRUITMENT PARTNERS</div>
        </div>
        <div className='plasment'>
          <div className='flax'>
            <div className="plasmentborder"><img src={studentpalsment}></img></div>
            <div className="plasmentborder"><img src={studentpalsment2}></img></div>
            <div className="plasmentborder"><img src={studentpalsment3}></img></div>
            <div className="plasmentborder"><img src={studentpalsment4}></img></div>
            <div className="plasmentborder"><img src={studentpalsment5}></img></div>
            <div className="plasmentborder"><img src={studentpalsment6}></img></div>
          </div>
        </div>
        <div className="spas"></div>
      </div>
      <div className="container">
        <h4>Our Demanded Course -</h4>
        <div>
          <a href="" className="traininig">coreldraw training institute</a>
          <a href="" className="traininig">Advance react js training institute in surat</a>
          <a href="" className="traininig">Best wordpress training institute</a>
          <a href="" className="traininig">Top game development training institute</a>
          <a href="" className="traininig">It training institute in in katargam</a>
          <a href="" className="traininig">CCC certificate center in surat</a>
          <a href="" className="traininig">Creo parametrics training institute in Mota Varachha</a>
          <a href="" className="traininig">Lumion training institute in varachha</a>
          <a href="" className="traininig">Best wordpress training institute</a>
          <a href="" className="traininig">CCC certificate center in surat</a>
          <a href="" className="traininig">Lumion training institute in varachha</a>
        </div>
        <div className="spas"></div>
      </div>

      {/* footer */}
      <footer className="last_info">
        <div className="container">
          <div className="flax">
            <div className="mainfooter">
              <div>
                <img className="footerlo" src={footerlogo}></img>
              </div>
              <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <h3 style={{ color: "#FFBC06" }}>FOLLOW US ON</h3>
              <div className="icon">
                <a><FaFacebookF></FaFacebookF></a>
                <a><FaTwitter></FaTwitter></a>
                <a><TiSocialGooglePlus></TiSocialGooglePlus></a>
                <a><FaLinkedin></FaLinkedin></a>
                <a><TiSocialInstagram></TiSocialInstagram></a>
                <a><CiYoutube></CiYoutube></a>
                <a><FaWhatsapp></FaWhatsapp></a>
              </div>
            </div>
            <div className="midalfoot">
              <h3>FEATURE LINKS</h3>
              <ul className="courfooter">
                <li><a href="" className="midalfooter"><FaHandPointRight ></FaHandPointRight>About Us</a></li>
                <li><a href="" className="midalfooter"><FaHandPointRight ></FaHandPointRight>Blogs</a></li>
                <li><a href="" className="midalfooter"><FaHandPointRight ></FaHandPointRight>Join Us</a></li>
                <li><a href="" className="midalfooter"><FaHandPointRight ></FaHandPointRight>Company Login</a></li>
                <li><a href="" className="midalfooter"><FaHandPointRight ></FaHandPointRight>Certificate Verification</a></li>
              </ul>
            </div>
            <div>
              <h3>CONTACT US</h3>
              <h2 style={{ color: "#FFBC06" }}>HEAD OFFICE - YOGICHOWK</h2>
              <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p>mo :<span style={{ color: "#FFBC06" }}> +91 90333 16003</span></p>
              <p style={{ color: "#FFBC06" }}>OTHER BRANCHES</p>
              <ul className="courfooter">
                <li><a href="" className="midalfooter"><AiOutlineBank></AiOutlineBank>Katargam</a></li>
                <li><a href="" className="midalfooter"><AiOutlineBank></AiOutlineBank>Mota Varachha</a></li>
                <li><a href="" className="midalfooter"><AiOutlineBank></AiOutlineBank>Adajan</a></li>
                <li><a href="" className="midalfooter"><AiOutlineBank></AiOutlineBank>Navsari</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </section>
  )
}

export default App;
