import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m <span className="bg-gradient-to-r from-[#D4AF37] to-[#6A0DAD] bg-clip-text text-transparent">
          Fernando
        </span>
      </h1>

      <p className="mt-3 text-xl">
        Aloha everyone! Check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-3xl">
        My Projects
      </h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return (
            <Link href={`/projects/${project.slug}`} className="bg-white border-2 border-[#D4AF37] rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition" key={project._id}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={`Project ${project.name}`}
                  width={750} 
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-[#D4AF37] to-[#6A0DAD] bg-clip-text text-transparent">{project.name}</div>
            </Link>
          )}
        )}
      </div>
    </div>
  )
}