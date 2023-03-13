import { useState, useEffect } from "react";

function AboutPage() {
  return (
    <>
      <body className="page-body">
        <h1>More about EducAid</h1>

        <div className="page-image-container">
          <img
            src={`/assets/media/jump2.jpg`}
            className="page-image"
            alt="person-jumping"
          />
        </div>
        <h2>""...Anything worth doing is going to be difficult"</h2>
        <p className="page-text">
          EducAid aims to connect those seeking funding for highly rated, online
          educational courses with generous donors who share our mission. We
          understand that financial constraints can prevent individuals from
          accessing the education they deserve. That's why we're committed to
          making education accessible to everyone, regardless of their financial
          situation. Our crowdfunding platform allows users to create campaigns
          to raise funds for their education. By sharing their story, they can
          connect with donors who are passionate about helping others achieve
          their educational goals. <br />
          <br />
          We take pride in our community of donors who share our mission of
          making education accessible to everyone. Their generosity has helped
          many individuals achieve their educational dreams and we're committed
          to continuing our efforts in creating a world where everyone has
          access to quality education. Join us in our mission to make education
          accessible to everyone. Create a campaign, or browse through campaigns
          to donate and help someone achieve their educational goals. Together,
          we can make a difference.
        </p>
      </body>
    </>
  );
}

export default AboutPage;
