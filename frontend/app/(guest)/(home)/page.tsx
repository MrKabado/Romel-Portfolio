import Hero from "@/components/common/Hero"
import Container from "@/components/common/Container"
import ProjectsHolder from "../../../components/common/ProjectsHolder"

export default function HomePage() {
  return (
    <>
      <Container>
        <Hero />
        <ProjectsHolder limit={true} isHome={true}/>
      </Container>
    </>
  )
}