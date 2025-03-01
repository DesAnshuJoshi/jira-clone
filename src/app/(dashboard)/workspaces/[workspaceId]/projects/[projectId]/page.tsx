import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { ProjectIdClient } from "./client";


const ProjectIdPage = async () => {
   const user = await getCurrent();
   if (!user) redirect("/sign-in");


   return (
      <>
         <head><title>TaskFlow | Project</title></head>
         <ProjectIdClient />
      </>
   );
};

export default ProjectIdPage;