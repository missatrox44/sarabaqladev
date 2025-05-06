// at the top
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import('@/components/Contact'), { ssr: false });
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";
// import ContactForm from "@/components/Contact";

const content = `# Landing Page

Coming Soon`;

export async function generateMetadata() {
  return {
    title: "Sara Baqla",
    description: "Full Stack Developer",
    openGraph: {
      title: "Sara Baqla",
      description: "Full Stack Developer",
      images: [
        signOgImageUrl({
          title: "Sara Baqla",
          label: "Sara Baqla",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    // <div className="container mx-auto px-5">
    //   <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
        <ContactForm />
      </div>
    //   <Footer />
    // </div>
  );
};

export default Page;
