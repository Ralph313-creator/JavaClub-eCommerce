import React from 'react';
import Img1 from '../assets/about1img.jpeg';

const About = () => {
  return (
    <section>
      Our Story
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p>
            The Java Club was founded in December 2022, following the global
            epidemic. Our firm was founded on the friendship of IT students. We
            became imaginative about how to keep our business running as we
            recovered from the epidemic. We started selling our coffee in Lipa
            and Batanggas, since it is one of the provinces that supplies coffee
            beans in our country. We are happy to promote and deliver excellent,
            flavorful Philippine-sourced coffee in response to the rising demand
            for specialty coffee. Because of its perfect climate and rich soils,
            both in the lowlands and in the mountain regions, the Philippines is
            one of the few countries that produces the four varieties of
            commercially viable coffee. The Java Club is a welcoming environment
            where we can appreciate our uniqueness and establish a feeling of
            community.
          </p>
        </div>
        <div>
          <img src="Img1" alt="Img" />
        </div>
      </div>
    </section>
  );
};

export default About;
