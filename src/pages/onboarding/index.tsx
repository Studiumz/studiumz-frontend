import CustomModal from "@/components/elements/modal";
import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import { CardModule } from "@/components/modules/CardModule";
import { Label, TextInput, Button } from "flowbite-react";
import { GenderContents, subjectContents } from "./constant";
import { Key } from "react";

export default function Onboarding() {
  return (
    <>
      {/* <CustomModal /> */}

      <form className="flex flex-col p-5 py-28 justify-center items-center z-0">
        {/* <StudiumzLogo size={"w-20"} className="my-10" /> */}

        <div className="flex lg:flex-row flex-col gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                placeholder="name@gmail.com"
                required
                type="email"
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
              </div>
              <TextInput id="name" sizing="md" type="text" />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="nickname" value="Nickname" />
              </div>
              <TextInput id="nickname" sizing="md" type="text" />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <ul className="flex flex-wrap gap-2 w-full">
                {GenderContents.map((content) => {
                  return (
                    <ul key={content.id}>
                      <li key={content.id}>
                        <CardModule
                          type={content.type}
                          id={content.id}
                          value={content.value}
                          isRequired={content.isRequired}
                          subject={content.subject}
                        />
                      </li>
                    </ul>
                  );
                })}
              </ul>
            </div>

            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of birth
              </label>
              <ul>
                <li>
                  <TextInput
                    // {...register("start_date", {
                    //   required: false,
                    //   valueAsDate: true,
                    //   validate: (val) =>
                    //     val === new Date(defaultData.start_date) ||
                    //     val < control._formValues.end_date ||
                    //     "Tanggal & waktu mulai harus sebelum tanggal & waktu selesai.",
                    // })}
                    type="datetime-local"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="mb-2 block">
              <Label htmlFor="stories" value="Share your struggle stories" />
            </div>
            <TextInput id="stories" sizing="lg" type="text" />

            <div className="my-10">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose your interests
              </label>
              <ul className="flex flex-wrap gap-3">
                {subjectContents.map(
                  (content: {
                    id: string;
                    type: string;
                    value: string;
                    isRequired: boolean | undefined;
                    subject: string | undefined;
                  }) => {
                    return (
                      <>
                        <ul key={content.id}>
                          <li>
                            <CardModule
                              type={content.type}
                              id={content.id}
                              value={content.value}
                              isRequired={content.isRequired}
                              subject={content.subject}
                            />
                          </li>
                        </ul>
                      </>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        <Button type="submit" className="cursor-pointer bg-violet px-3 my-5">
          Submit
        </Button>
      </form>
    </>
  );
}
