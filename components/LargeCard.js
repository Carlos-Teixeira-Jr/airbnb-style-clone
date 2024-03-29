import Image from "next/image";

function LargeCard({img, title, description, buttonText}){
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] items-center">
        <Image 
          className="rounded-2xl"
          src={img}
          width={900}
          height={900}
        />
      </div>

      <div className="absolute md:top-24 lg:top-32 top-20 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
    
  )
}

export default LargeCard;