import React from 'react';

function Announcements() {
  return (
    <section className="content">
      <div className="mission-page">
        <section className="announcements-feed">
          <div className="announcements-feed__header">
            <h1>Latest News &amp; Announcements</h1>
            <p>Updates from Northern Rizal Yorklin School</p>
          </div>

          <article className="facebook-post">
            <div className="facebook-post__author">
              <div className="facebook-post__avatar">NR</div>
              <div>
                <strong>Northern Rizal Yorklin School</strong>
                <span>Facebook post &middot; Example</span>
              </div>
              <span className="facebook-post__mark">f</span>
            </div>

            <p className="facebook-post__text">
              📢 <strong>HSK Exam</strong>
              <br />
              Please read the announcement for the complete schedule and important reminders.
            </p>

            <div className="announcement-art announcement-art--exam">
              <p>ANNOUNCEMENT</p>
              <strong>HSK EXAM</strong>
              <span>October 17-18</span>
            </div>

            <a className="facebook-post__link" href="https://www.facebook.com/NRYS1939" target="_blank" rel="noopener noreferrer">
              View original post on Facebook ↗
            </a>
          </article>

          <article className="facebook-post">
            <div className="facebook-post__author">
              <div className="facebook-post__avatar">NR</div>
              <div>
                <strong>Northern Rizal Yorklin School</strong>
                <span>Facebook post &middot; Example</span>
              </div>
              <span className="facebook-post__mark">f</span>
            </div>

            <h2>Upcoming School Activities</h2>
            <p className="facebook-post__text">
              Stay tuned for updates about school events, student activities, and other important reminders.
            </p>

            <a className="facebook-post__link" href="https://www.facebook.com/NRYS1939" target="_blank" rel="noopener noreferrer">
              View original post on Facebook ↗
            </a>
          </article>

          <p className="announcements-feed__note">
            Announcements will be posted on my personal Facebook account first before being shared on the official school page.
          </p>
          <a className="card-btns announcements-feed__page-link" href="https://www.facebook.com/NRYS1939" target="_blank" rel="noopener noreferrer">
            Visit Official Facebook Page
          </a>
        </section>
      </div>
    </section>
  );
}

export default Announcements;