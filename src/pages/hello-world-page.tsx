import { Button } from "@/components/ui/button"
import { CONTRIBUTOR_SOSMED } from "@/constants/contributor-sosmed"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function HelloWorldPage() {
  return (
    <div className="h-svh font-inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">Hello World!</h1>
        <span className="font-medium">Thanks For Using This Template!</span>
        <p className="text-center text-muted-foreground">
          If you have something to ask, please don{"'"}t hesitate to contact me
          at
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" asChild>
            <Link
              to={CONTRIBUTOR_SOSMED.GITHUB}
              className="flex items-center gap-x-2">
              <FaGithub className="flex-shrink-0 w-5 h-5" /> My Github
            </Link>
          </Button>
          <Button asChild>
            <Link
              to={CONTRIBUTOR_SOSMED.LINKEDIN}
              className="flex items-center gap-x-2">
              <FaLinkedinIn className="flex-shrink-0 w-5 h-5" /> Linkedin
            </Link>
          </Button>
          <Button asChild>
            <Link
              to={CONTRIBUTOR_SOSMED.INSTAGRAM}
              className="flex items-center gap-x-2">
              <FaInstagram className="flex-shrink-0 w-5 h-5" /> Instagram
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
