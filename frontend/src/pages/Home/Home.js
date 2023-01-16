import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { categories } from '../../constants/categories';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import selfie from "./../../pictures/selfiee.jpg"
import "./Home.css"

const Home = () => {
    return (
        <>
            <div>
                <Navbar type={categories.HOME} />
                <FadeInSection>
                    <div id="home-about">
                        <div id="about-desc">
                            <h2 id="home-hi">hi!</h2>
                            <h2 id="home-desc">i'm tessa :) i'm a full time software engineer at microsoft. but i promise i do more than just code. 
                                i mainly made this just to have an organized way for me to literally journal and write down every aspect of my life. 
                                because... why not? this'll also help me improve my full stack skills too. ima edit this later, make it more interesting.
                            </h2>
                        </div>
                        <img src={selfie} alt="tess" id="selfie" />
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div id="home-music">
                        <h2 id="music-title">some music i've been listening to :P</h2>
                        <p id="music-desc">maybe follow me on spotify? 👀</p>
                        <iframe title="wow" src="https://open.spotify.com/embed/playlist/3q4N1EUmGugVqKC1zQJEe7?utm_source=generator" width="60%" height="600" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div id="home-social">
                        <h2 id="social-title">other socials</h2>
                        <div id="social-links">
                            <a href="https://www.instagram.com/tessatapmongkol/?hl=en"><p>instagram</p></a>
                            <a href="https://vsco.co/tessatapp/gallery"><p>vsco</p></a>
                            <a href="https://www.linkedin.com/in/tessa-tapmongkol"><p>linkedin</p></a>
                            <a href="https://tessa-tapmongkol.github.io/"><p>my cs stuff</p></a>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
}

export default Home;