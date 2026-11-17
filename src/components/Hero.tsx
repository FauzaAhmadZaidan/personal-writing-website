function Hero() {
    return (
        <section className="hero">
            <div className="hero-decoration hero-decoration-green"/>
            <div className="hero-decoration hero-decoration-pink"/>

            <div className="hero-content">
                <span className="hero-label">a tiny corner of the internet ✿</span>

                <h1>
                    Words I want,
                    <br />
                    to remember.
                </h1>

                <p>
                    A personal space for stories, memmories, thoughts, and all the little 
                    things worth keeping.
                </p>

                <a href="#stories" className="primary-button">
                    Read my stories
                    <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;