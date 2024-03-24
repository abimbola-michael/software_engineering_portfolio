import SocialMediaIcon from "../components/SocialMediaIcon";
import { socialMedialinks } from "../data";

export default function ContactPage() {
  // const emailRef = useRef<string>("");
  // const nameRef = useRef<string>("");
  // const messageRef = useRef<string>("");
  // const subjectRef = useRef<string>("");
  // const phoneNumberRef = useRef<string>("");
  // function updateValue(value: string, ref: React.MutableRefObject<string>) {
  //   if (ref.current !== value) {
  //     ref.current = value;
  //   }
  // }
  // function sendMail() {}
  return (
    <div
      className="relative flex flex-col min-h-screen items-center text-center justify-center px-[5%] py-[5%] gap-4"
      id="contact"
    >
      <h1 className="text-4xl md:text-5xl font-bold first-letter:underline underline-offset-8 first-letter:decoration-orange-400">
        Contact me
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5 py-4">
        <SocialMediaIcon name="gmail" link={socialMedialinks[0]} />
        <SocialMediaIcon name="github" link={socialMedialinks[1]} />
        <SocialMediaIcon name="linkedin" link={socialMedialinks[2]} />
        <SocialMediaIcon name="twitter" link={socialMedialinks[3]} />
        <SocialMediaIcon name="facebook" link={socialMedialinks[4]} />
        <SocialMediaIcon name="instagram" link={socialMedialinks[5]} />
      </div>
      {/* <div className="flex flex-wrap gap-[4%] py-4">
        <AppTextInput
          placeHolder="Full Name"
          onChanged={(value) => updateValue(value, nameRef)}
        />
        <AppTextInput
          placeHolder="Email Address"
          onChanged={(value) => updateValue(value, emailRef)}
        />
        <AppTextInput
          placeHolder="Phone Number"
          onChanged={(value) => updateValue(value, phoneNumberRef)}
        />
        <AppTextInput
          placeHolder="Subject"
          onChanged={(value) => updateValue(value, subjectRef)}
        />
        <AppTextInput
          placeHolder="Message"
          onChanged={(value) => updateValue(value, messageRef)}
          isFull={true}
        />
      </div>
      <div className="py-8">
        <AppButton text="Send" onClick={sendMail} />
      </div> */}
    </div>
  );
}
