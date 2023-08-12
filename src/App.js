import "./style/app.css"
import Main from "./pages/main"
import Nav from "./pages/navigation"
import Project from "./pages/project"
import Certification from "./pages/certification"
import {BrowserRouter} from "react-router-dom";
import StarsBack from "./3D/StarsBack"
import Footer from "./pages/footer"
import {useState} from "react";

function App() {
    const [showSticky, setShowSticky] = useState(true);
    return (
            <BrowserRouter>
                <div className="pages">
                    <div className="BackgroundStars">
                        <StarsBack/>
                    </div>
                    {showSticky && (
                        <div className="sticky">
                            <Nav/>
                        </div>)}
                        <section id={'main-section'}>
                            <Main/>
                        </section>
                        <section id={'project-section'}>
                            <Project/>
                        </section>
                        <section id={'certifications-section'}>
                            <Certification setShowSticky={setShowSticky}/>
                            <Footer/>
                        </section>
                </div>
            </BrowserRouter>
    )
}

export default App;