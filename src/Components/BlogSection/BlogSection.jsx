
import "./BlogSection.css";
import mali from '../../assets/mali.jpg';
import bali from '../../assets/bali beach.jpg';
import japan from '../../assets/japan.jpg';

const blogPosts = [
  {
    title: "Beautiful Maldives. Let's travelling!",
    description: "The Maldives is one of the most sought-after vacation destinations in the world, and it’s easy to see why. With its pristine white-sand ...",
    image: mali,
  },
  {
    title: "Enjoy the beauty of the dewata Bali beach",
    description: "Bali is one of the most sought-after vacation destinations in the world, and it’s no wonder why. This enchanting Indonesian island is a ...",
    image: bali,
  },
  {
    title: "Enjoy the beauty of Horyuji temple Japan",
    description: "Japan is a treasure trove of historical wonders, and among its many ancient sites, Horyuji Temple stands as a timeless testament to the ...",
    image: japan,
  },
 
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      {/* <h5 className="blog-category">Blog</h5> */}
      <h2 className="blog-title">Our Blogs</h2>
      <p className="blog-description">
      Travel is the movement of people between distant geographical locations, whether for leisure, adventure, business, or personal reasons. 
      It allows individuals to explore new cultures, experience different landscapes, and create lasting memories. Travel can be undertaken 
      in various ways, depending on the destination and preference. Some may choose the simplicity of traveling by foot, immersing themselves 
      in the journey step by step, while others might opt for the freedom of a bicycle, enjoying the scenery at a leisurely pace.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-heading">{post.title}</h3>
              <p className="blog-text">{post.description}</p>
              <a href="#" className="blog-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
