import Header from '@/components/Header'
import Box from '@/components/Box'
import Tech from "../../public/—Pngtree—information technology cloud computing computer_6406341.svg";
import Tech2 from "../../public/—Pngtree—information technology cloud computing tree_6406333.svg";
import Contact from '@/components/Contact';
import ContactImg from "../../public/vecteezy_email-and-mail-icon-black_20009601_913 (2).svg";
import Hero from '@/components/Hero';
import HeroImage from "../../public/image_processing20201223-10569-8q2hxf.svg";
import Cluster from "../../public/LogoCluster.svg";

export default function Home() {
  return (

    <div>
      <Header />
      <div className='flex flex-col h-64 w-4/6 m-auto pt-28'>
        <Hero
          title={'Tailored Software Solutions Worldwide'}
          description={`Unlock your full potential with Ologie - the expert consultancy for tailored software solutions.`}
          reverse={false}
          img={HeroImage}></Hero>

        <Box
          title={'OUR MISSION'}
          reverse={false}
          description="At Ologie, our mission is to provide customized solutions that cater to our clients' unique needs, offering them the best value for their investment. Our team comprises experienced developers, architects, and consultants who are proficient in their respective domains and equipped with the latest tools and knowledge to deliver quality solutions.
    We are dedicated to maintaining the highest standards of excellence, innovation, and customer satisfaction, making us a reliable partner in the industry. As the digital landscape is continuously evolving, we are committed to helping our clients thrive by providing them with the support they need to succeed."
          img={Tech}
        ></Box>

        <Box
          title={'SERVICES'}
          reverse={true}
          description="Our company specializes in creating bespoke software solutions for businesses that require customized and tailored services. With a diverse skill set, we can provide a wide range of services that include API integration, web application development, and AI projects. We understand that each business has unique requirements, and that's why we work closely with our clients to understand their specific needs and deliver solutions that meet their goals. Whether it's integrating different software tools or building a complex AI system, we have the expertise and experience to help businesses achieve their objectives."
          img={Tech2}
        ></Box>

        <Box
          title={'TECHNOLOGIES'}
          reverse={false}
          description="To create the software you desire we utilize programming languages such as C#, Java, Python, and JavaScript to create a wide variety of applications, ranging from desktop software to web applications. To streamline the development process, we rely on frameworks like .NET, Unity, and TensorFlow. In addition to these tools, we also utilize other popular languages and frameworks like Ruby on Rails, PHP, React, and Angular. With our expertise in these technologies, we ensure that our clients receive the most up-to-date and effective solutions for their projects."
          img={Cluster}
        ></Box>

        <Contact
          title={'Get it touch!'}
          reverse={false}
          description="Lets talk about your project and come up with the best solution!"
          img={ContactImg}
        ></Contact>
      </div>

    </div>
  )
}