import CustomModal from "@/components/elements/modal";
import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import { Label, TextInput, Button } from "flowbite-react";

export default function Onboarding() {
  return (
    <>
      <CustomModal />

      <form className="flex flex-col p-5 justify-center items-center">
        <StudiumzLogo size={"w-20"} className="my-10" />

        <div className="flex lg:flex-row flex-col gap-16">
          <div className="w-1/2">
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
                <li>
                  <input
                    type="radio"
                    id="male"
                    name="hosting"
                    value="male"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="male"
                    className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">Male</div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="female"
                    name="hosting"
                    value="female"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="female"
                    className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">Female</div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="others"
                    name="hosting"
                    value="others"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="others"
                    className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">Others</div>
                  </label>
                </li>
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

          <div className="w-1/2">
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
              <ul className="flex gap-3">
                <li>
                  <input
                    type="radio"
                    id="biologi"
                    name="hosting"
                    value="biologi"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="biologi"
                    className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">Biologi</div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="kimia"
                    name="hosting"
                    value="kimia"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="kimia"
                    className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">Kimia</div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="fisika"
                    name="hosting"
                    value="fisika"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="fisika"
                    className="inline-flex items-center justify-center w-32 py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-violet peer-checked:text-violet hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">Fisika</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Button type="submit" className="cursor-pointer bg-violet px-3 my-5">
          Submit
        </Button>
      </form>
      {/* <Modal /> */}
    </>
  );
}
