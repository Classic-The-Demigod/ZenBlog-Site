import React from 'react'
import LandScape1 from "../assets/img/post-landscape-1.jpg";
import LandScape2 from "../assets/img/post-landscape-2.jpg";
import LandScape3 from "../assets/img/post-landscape-3.jpg";
import LandScape4 from "../assets/img/post-landscape-4.jpg";
import LandScape5 from "../assets/img/post-landscape-5.jpg";
import LandScape6 from "../assets/img/post-landscape-6.jpg";
import LandScape7 from "../assets/img/post-landscape-7.jpg";
import LandScape8 from "../assets/img/post-landscape-8.jpg";
import postPortrait1 from "../assets/img/post-portrait-1.jpg";
import postPortrait2 from "../assets/img/post-portrait-2.jpg";
import postPortrait3 from "../assets/img/post-portrait-3.jpg";
import postPortrait4 from "../assets/img/post-portrait-4.jpg";
import postPortrait5 from "../assets/img/post-portrait-5.jpg";
import postPortrait6 from "../assets/img/post-portrait-6.jpg";
import postPortrait7 from "../assets/img/post-portrait-7.jpg";
import postPortrait8 from "../assets/img/post-portrait-8.jpg";
import Person1 from "../assets/img/person-1.jpg";
import Person2 from "../assets/img/person-2.jpg";
import Person3 from "../assets/img/person-3.jpg";
import Person4 from "../assets/img/person-4.jpg";
import Person5 from "../assets/img/person-5.jpg";
import Person6 from "../assets/img/person-6.jpg";
import Person7 from "../assets/img/person-7.jpg";



function About() {
  return (
      <main id="main">
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h1 className="page-title">About us</h1>
          </div>
        </div>

        <div className="row mb-5">

          <div className="d-md-flex post-entry-2 half">
            <a href="#" className="me-4 thumbnail">
                              <img src={ LandScape2} alt="" className="img-fluid"/>
            </a>
            <div className="ps-md-5 mt-4 mt-md-0">
              <div className="post-meta mt-4">About us</div>
              <h2 className="mb-4 display-4">Company History</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
              <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>
            </div>
          </div>

          <div className="d-md-flex post-entry-2 half mt-5">
            <a href="#" className="me-4 thumbnail order-2">
              <img src={LandScape1} alt="" className="img-fluid"/>
            </a>
            <div className="pe-md-5 mt-4 mt-md-0">
              <div className="post-meta mt-4">Mission &amp; Vision</div>
              <h2 className="mb-4 display-4">Mission &amp; Vision</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
              <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section className="mb-5 bg-light py-5">
      <div className="container" >
        <div className="row justify-content-between align-items-lg-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="display-4 mb-4">Latest News</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rem eaque vel est asperiores iste pariatur placeat molestias, rerum provident ea maiores debitis eum earum esse quas architecto! Minima, voluptatum! Minus tempora distinctio quo sint est blanditiis voluptate eos. Commodi dolore nesciunt culpa adipisci nemo expedita suscipit autem dolorum rerum?</p>
            <p>At magni dolore ullam odio sapiente ipsam, numquam eius minus animi inventore alias quam fugit corrupti error iste laboriosam dolorum culpa doloremque eligendi repellat iusto vel impedit odit cum. Sequi atque molestias nesciunt rem eum pariatur quibusdam deleniti saepe eius maiores porro quam, praesentium ipsa deserunt laboriosam adipisci. Optio, animi!</p>
            <p><a href="#" className="more">View All Blog Posts</a></p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6">
                <img src={postPortrait3} alt="" className="img-fluid mb-4"/>
              </div>
              <div className="col-6 mt-4">
                <img src={postPortrait4} alt="" className="img-fluid mb-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 className="display-4">Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint sed, fugit distinctio ad eius itaque deserunt doloribus harum excepturi laudantium sit officiis et eaque blanditiis. Dolore natus excepturi recusandae.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-5">
                          <img src={ Person3} alt="" className="img-fluid rounded-circle w-50 mb-4"/>
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Founder &amp; CEO</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="col-lg-4 text-center mb-5">
            <img src={Person2} alt="" className="img-fluid rounded-circle w-50 mb-4"/>
            <h4>Wade Warren</h4>
            <span className="d-block mb-3 text-uppercase">Founder, VP</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="col-lg-4 text-center mb-5">
            <img src={Person3} alt="" className="img-fluid rounded-circle w-50 mb-4"/>
            <h4>Jane Cooper</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="col-lg-4 text-center mb-5">
            <img src={Person4} alt="" className="img-fluid rounded-circle w-50 mb-4"/>
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="col-lg-4 text-center mb-5">
            <img src={Person5} alt="" className="img-fluid rounded-circle w-50 mb-4"/>
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
          <div className="col-lg-4 text-center mb-5">
            <img src={Person6} alt="" className="img-fluid rounded-circle w-50 mb-4"/>
            <h4>Cameron Williamson</h4>
            <span className="d-block mb-3 text-uppercase">Editor Staff</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
          </div>
        </div>
      </div>
    </section>

  </main>
  )
}

export default About