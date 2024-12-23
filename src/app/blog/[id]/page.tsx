import { birdsData } from "@/app/lib/post";
import { notFound } from "next/navigation";
import CommentSection from "@/app/components/comment";
import Image from "next/image";



const BirdDetailPage = async ({params}:{params:Promise<{id:string}>}) => {
  
  const { id } = await params; 
  const bird = birdsData.find((b) => b.id === parseInt(id,10) );

  if (!bird) return notFound(); // If the bird is not found, show a 404 page

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-100 p-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
        <Image
        width={500}
        height={500}
          src={bird.image}
          alt={bird.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 bg-gradient-to-r from-pink-100 to-green-100">
          <h1 className=" text-[#E57676] text-4xl font-bold mb-4">{bird.name}</h1>
          <p className="text-gray-400 italic mb-4">{bird.scientificName}</p>
          <p className="text-gray-700">{bird.description}</p>
        </div>
      </div>
      <CommentSection/>
    </div>
  );
};

export default BirdDetailPage;







