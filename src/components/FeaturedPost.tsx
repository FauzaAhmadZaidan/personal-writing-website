function FeaturedPost () {
    return (
        <section className="stories-section" id="stories">
            <div className="section-heading">
                <div>
                    <span className="section-label">from the journal</span>
                    <h2>Latest stories</h2>
                </div>

                <a href="#" className="view-all">View all →</a>
            </div>

            <article className="featured-post">
                <div className="post-image">
                    <span>your photo here ♡</span>
                </div>

                <div className="post-content">
                    <span className="post-category">thoughts</span>

                    <h3>A little story will live here someday</h3>

                    <p>
                        This is where the newest story will appear after our publishing
                        system is connected to the database.
                    </p>

                    <div className="post-meta">
                        <span>September 16, 2026</span>
                        <span>5 min read</span>
                    </div>

                    <a href="#" className="read-story">Read story →</a>
                </div>
            </article>
        </section>
    );
}

export default FeaturedPost;