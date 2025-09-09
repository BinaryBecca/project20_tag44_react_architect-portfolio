import { Link } from "react-router"
import Button from "../../components/button/Button"
import Headline from "../../components/headline/Headline"

export default function Projects() {
  return (
    <>
      <article>
        <section className="flex flex-row items-start justify-center gap-[2rem]">
          <div className="grid grid-cols-2 grid-rows-2 gap-[1rem]">
            <img src="/About1.jpg" alt="house" className="col-start-1 row-start-1 object-contain" />
            <img src="/About2.jpg" alt="house" className="col-start-1 row-start-2 object-contain" />
            <img src="/About3.jpg" alt="house" className="col-start-2 row-start-1 object-contain h-full row-span-2" />
          </div>

          <div className="flex flex-col items-start">
            <Headline headline="About" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit perferendis necessitatibus commodi
              inventore sint ducimus aspernatur blanditiis reprehenderit repudiandae deleniti obcaecati quasi error
              expedita eaque sequi, consectetur aliquid doloremque soluta.
            </p>
            <Button
              to=""
              buttonText="READ MORE"
              backgroundColor="white"
              textColor="black"
              arrowImage="/icon_arrow_black.png"
            />
          </div>
        </section>

        <section>
          <Headline headline="Main Focus/Mission Statement" />
          <div className="flex flex-row gap-[2rem] justify-between">
            <div className="flex flex-row gap-[1rem] items-center justify-center">
              <span className="text-gray-100 text-[8rem] font-bold">1</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis saepe nihil, quas beatae
                dicta dolores debitis natus temporibus ab optio vitae quaerat provident ipsa cumque eaque harum nesciunt
                corrupti.
              </p>
            </div>

            <div className="flex flex-row gap-[1rem] items-center justify-center">
              <span className="text-gray-100 text-[8rem] font-bold">2</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis saepe nihil, quas beatae
                dicta dolores debitis natus temporibus ab optio vitae quaerat provident ipsa cumque eaque harum nesciunt
                corrupti.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[4rem] mb-[4rem]">
          <Headline headline="Our Projects" />
          <div className="flex flex-row flex-wrap gap-[2rem]">
            <div className="relative h-[15rem] object-cover w-[30rem] border-1 bg-[url('/projects_03.png')]">
              <div className="flex flex-col justify-center items-start absolute h-[15rem] w-full bg-black/60 p-[4rem]">
                <p className="text-white text-[3rem] font-bold">Sample Project</p>
                <Link
                  to=""
                  className="flex flex-row items-center justify-center gap-[1.5rem] p-[2rem] max-w-[15rem] text-white bg-[var(--button-background-color)]">
                  VIEW MORE
                  <img src="/icon_arrow.png" alt="icon arrow" />
                </Link>
              </div>
            </div>
            <img src="projects_01.png" alt="project" className="object-cover h-[15rem]" />
            <img src="projects_02.png" alt="project" className="object-cover h-[15rem]" />
            <img src="projects_03.png" alt="project" className="object-cover h-[15rem]" />
            <img src="projects_04.png" alt="project" className="object-cover h-[15rem]" />
          </div>

          <div className="flex justify-end items-start h-[10rem] mr-[2rem]">
            <Button to="" buttonText="ALL PROJECTS" />
          </div>
        </section>
      </article>
    </>
  )
}
