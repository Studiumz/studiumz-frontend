import CustomModal from "@/components/elements/modal";
import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import { CardModule } from "@/components/modules/CardModule";
import { Label, TextInput, Button, Radio } from "flowbite-react";
import {
  BaseSyntheticEvent,
  FormEventHandler,
  Key,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import GenderContents from "../../components/utils/GenderConstant";
import subjectContents from "../../components/utils/subjectConstant";
import { useAuthContext } from "@/components";
import axios from "axios";
import router from "next/router";
import { toast } from "react-toastify";
import { cfg } from "@/components/config";
import { Subject } from "./interface";

export default function Onboarding() {
  const { userInfo, accessToken, loading: isAuthLoading } = useAuthContext();
  const [form, setForm] = useState<any>({
    subject_names: [],
  });
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function fetchAllSubjects() {
    axios
      .get(`${cfg.API}/subject/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setSubjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onFormChange(e: BaseSyntheticEvent) {
    console.log(e.target);
    setForm((prev: any) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubjectContents(subject: string) {
    const arr: any[] = form.subject_names || [];
    setForm((prev: any) => ({
      ...prev,
      subject_names: [...prev.subject_names, subject],
    }));
    // if (arr?.includes(subject)) {
    //   const index = arr.indexOf(subject);
    //   if (index > -1) {
    //     arr.splice(index, 1)
    //     setForm((prev:any) => ({ ...prev, subject_names: arr }))
    //   }
    // } else {
    //   arr?.push(subject)
    //   setForm((prev:any) => ({ ...prev, subject_names: arr }))
    // }
  }

  function onFormSubmit() {
    setIsLoading(true);
    axios
      .post(`${cfg.API}/auth/onboarding`, form, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        toast.success("Onboarding complete! You can now proceed.");

        setTimeout(() => {
          router.push("/find");
        }, 2000);
      })
      .catch((err) => {
        toast.error("Error onboarding user.");
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (!isAuthLoading && accessToken) {
      fetchAllSubjects();
    }
  }, [accessToken, isAuthLoading]);

  return (
    <>
      {/* <CustomModal /> */}

      <form
        className="flex flex-col p-5 py-28 justify-center items-center z-0"
        onSubmit={() => {
          onFormSubmit();
        }}
      >
        {/* <StudiumzLogo size={"w-20"} className="my-10" /> */}

        <div className="flex lg:flex-row flex-col gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                defaultValue={userInfo?.email || "loading..."}
                type="email"
                disabled
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="full_name" value="Full Name" />
              </div>
              <TextInput
                id="full_name"
                sizing="md"
                type="text"
                defaultValue={userInfo?.full_name}
                value={form.full_name}
                onChange={onFormChange}
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="nickname" value="Nickname" />
              </div>
              <TextInput
                id="nickname"
                sizing="md"
                type="text"
                value={form.nickname}
                onChange={onFormChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <ul className="flex flex-wrap gap-2 w-full">
                {GenderContents.map((content, idx) => {
                  return (
                    <ul key={content.id}>
                      <li
                        key={content.id}
                        onClick={() => {
                          setForm((prev: any) => ({
                            ...prev,
                            ["gender"]: idx,
                          }));
                        }}
                      >
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
                    id="date_of_birth"
                    type="date"
                    value={form.date_of_birth}
                    onChange={onFormChange}
                    defaultValue={"2001-01-01"}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="mb-2 block">
              <Label htmlFor="struggles" value="Share your struggle stories" />
            </div>
            <TextInput id="struggles" sizing="lg" type="text" />

            <div className="my-10">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose your interests
              </label>
              <ul className="flex flex-wrap gap-3">
                {subjects.map((subject, idx) => {
                  return (
                    <>
                      <ul key={idx}>
                        <li onClick={() => handleSubjectContents(subject.name)}>
                          <CardModule
                            type={"checkbox"}
                            id={subject.name}
                            value={subject.name}
                            subject={subject.name}
                          />
                        </li>
                      </ul>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <Button
          type="button"
          className="cursor-pointer bg-violet px-3 my-5"
          onClick={onFormSubmit}
        >
          Submit
        </Button>
      </form>
    </>
  );
}
