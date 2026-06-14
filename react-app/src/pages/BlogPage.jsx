import EmbedFrame from '../components/EmbedFrame';
import PageMeta from '../components/PageMeta';

function BlogPage() {
  return (
    <>
      <PageMeta
        title="Blog | Healthy Mind Canine | Dog Separation Anxiety Training"
        description="Our certified dog separation anxiety experts provide custom coaching & training for pets and their guardians no matter where they live. We use the most effective methods available to give you the best chance of success!"
        path="/blog"
      />
      <EmbedFrame
        src="https://blog.healthymindcanine.com/"
        title="Healthy Mind Canine blog"
        className="blog-frame"
        loadingText="Loading Blog..."
      />
    </>
  );
}

export default BlogPage;
