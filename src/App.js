import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div>
        <h1 class="title">Development Portfolio</h1>
        <img class="applicant-picture" src="./images/applicant.jpg" alt="Image of applicant"></img>
      </div>
      <nav>
        <h2>Select one to view</h2>
        <a href="#main" class="test">Work Display</a>
        <a href="#h4" class="test">Contact Info</a>
      </nav>
      <div>
        <p id="resume-title">Check out my RESUME:</p>
        <img class="resume" src="./images/resume.jpg" alt="resume"></img>
      </div>
        <div className='Nav'>
          <h3 id="h3">Here are some projects!</h3>
            <div id="project">
              <a class="project_container" href="https://github.com/armandosjunior" target="_blank">
                <img class="project_picture" src="./images/ocean2.jpg" alt="Project 1" class="icon"
                width="600"
                height="600"
                id="text">
                <h5>Surf Report: MERN Stack</h5>
            </div>
            <div class="other_projects"
                id="project">
                <a class="project_container" href="https://github.com/armandosjunior" target="_blank">
                <img class="project_picture" src="./images/lukasz-niescioruk-LHgq4S_Zk2w-unsplash 3.JPG"        
                  alt="Project 2"
                  width="300"
                  height="300"
                  id="text">
               <h5>LED Wall: Node/loT</h5>
             </div>
        </div>
        <section className='Nav'>
        <h4 id="h4">Let's get connected!</4>
        <div class="contacts">
            <div class="contact">
                <h5> <img src="./images/email.jpg" alt="icon"></h5>
                <button id="contactbutton">Email</button>
            </div>
            <div class="contact">
                <h5> <img src="./images/phone.jpg" alt="icon"></h5>
                <button id="contactbutton">phone</button>
           </div>
           <div class="contact">
                <h5> <img src="./images/email.jpg" alt="icon"></h5>
                <button id="contactbutton">linkedIn</button>
           </div>
         </div>

    </section>

    </>
  );
}

export default App;
