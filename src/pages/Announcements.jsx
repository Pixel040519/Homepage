import { useEffect, useState } from 'react';
import ButtonLink from '../components/ButtonLink';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { SCHOOL } from '../data/siteInfo';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function FacebookPost({ post }) {
  return (
    <article className="facebook-post">
      <div className="facebook-post__author">
        <div className="facebook-post__avatar" aria-hidden="true">NR</div>
        <div className="facebook-post__meta">
          <strong>{SCHOOL.name}</strong>
          <span>Facebook post &middot; {formatDate(post.created_time)}</span>
        </div>
        <span className="facebook-post__mark" aria-hidden="true">f</span>
      </div>
      {post.message && (
        <p className="facebook-post__text" style={{ whiteSpace: 'pre-wrap' }}>
          {post.message}
        </p>
      )}
      {post.full_picture && (
        <img
          src={post.full_picture}
          alt=""
          loading="lazy"
          style={{ width: '100%', borderRadius: 8, marginTop: 8 }}
        />
      )}
      <a
        className="facebook-post__link"
        href={post.permalink_url || SCHOOL.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        View original post on Facebook ↗
      </a>
    </article>
  );
}

export default function Announcements() {
  useDocumentTitle('Announcements');
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('/api/fb-posts')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data.slice(0, 4));
          setActiveIndex(0);
          setStatus('ready');
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, []);

  useEffect(() => {
    if (posts.length < 2) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % posts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [posts.length]);

  function showPreviousPost() {
    setActiveIndex((index) => (index - 1 + posts.length) % posts.length);
  }

  function showNextPost() {
    setActiveIndex((index) => (index + 1) % posts.length);
  }

  return (
    <section className="page">
      <div className="announcements-feed">
        <div className="announcements-feed__header">
          <h1>Latest News &amp; Announcements</h1>
          <p>Updates from {SCHOOL.name}</p>
        </div>

        {status === 'loading' && <p>Loading latest posts...</p>}
        {status === 'error' && (
          <p>Could not load posts right now. Please visit our Facebook page.</p>
        )}
        {status === 'ready' && posts.length === 0 && <p>No posts yet.</p>}
        {status === 'ready' && posts.length > 0 && (
          <div className="announcements-slider" aria-label="Latest Facebook announcements">
            <div className="announcements-slider__viewport">
              <div className="announcements-slider__slide" key={posts[activeIndex].id}>
                <FacebookPost post={posts[activeIndex]} />
              </div>
            </div>
            {posts.length > 1 && (
              <div className="announcements-slider__controls">
                <button type="button" onClick={showPreviousPost} aria-label="Previous announcement">
                  &lsaquo;
                </button>
                <div className="announcements-slider__dots" aria-label="Choose announcement">
                  {posts.map((post, index) => (
                    <button
                      key={post.id}
                      type="button"
                      className={index === activeIndex ? 'active' : undefined}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show announcement ${index + 1}`}
                      aria-current={index === activeIndex ? 'true' : undefined}
                    />
                  ))}
                </div>
                <button type="button" onClick={showNextPost} aria-label="Next announcement">
                  &rsaquo;
                </button>
              </div>
            )}
          </div>
        )}
        <ButtonLink href={SCHOOL.facebook} className="announcements-feed__page-link">
          Visit Official Facebook Page
        </ButtonLink>
      </div>
    </section>
  );
}
