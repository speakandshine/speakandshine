import { useState } from "react";
import Button from "src/shared/components/Button";

import { AiOutlineFileDone } from "react-icons/ai";
import Textfield from "src/shared/components/Textfield";
import Checkbox from "src/shared/components/Checkbox";
import Loader from "src/shared/components/Loader";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdEmail, MdPhone } from "react-icons/md";
import { ASPECT_RATIO_BOOK_SESSION_MAP } from "src/shared/helpers/aspectRatios";
import FilledImage from "src/shared/components/FilledImage";

export interface IBookSessionProps {
  ref: any;
}

function BookSession(props: IBookSessionProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAge, setClientAge] = useState("");
  const [deliveryMethods, setDeliveryMethods] = useState<string[]>([]);
  const [enquiry, setEnquiry] = useState("");
  const [foundOut, setFoundOut] = useState("");

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const submitForm = () => {
    setFormSubmitting(true);
    fetch("https://formsubmit.co/ajax/derekdaquel@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "First name": firstName,
        "Last name": lastName,

        Email: email,
        "Phone Number": phoneNumber,
        Suburb: suburb,
        "Name of person wanting services": clientName,
        "Age of person wanting services": clientAge,
        "Delivery Methods interested in": deliveryMethods.toString(),
        Enquiry: enquiry,
        "How did you hear about us?": foundOut,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormSubmitting(false);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setFormSubmitting(false);
        setFormError(true);
      });
  };

  const isInputDisabled = () => {
    return formSubmitting || formSubmitted || formError;
  };

  const isButtonDisabled = () => {
    return (
      !(
        firstName &&
        lastName &&
        suburb &&
        email &&
        phoneNumber &&
        clientAge &&
        clientName &&
        foundOut &&
        enquiry &&
        deliveryMethods.length > 0
      ) ||
      formSubmitting ||
      formSubmitted ||
      formError
    );
  };

  const removeOrAddDeliveryMethod = (method: string) => {
    if (deliveryMethods.includes(method)) {
      setDeliveryMethods(deliveryMethods.filter((dm) => dm !== method));
    } else {
      setDeliveryMethods(deliveryMethods.concat(method));
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center laptop:grid laptop:grid-cols-2 p-[30px] pt-[10px]">
        {!formSubmitted && !formError && (
          <div className="p-[30px] bg-secondary-yellow rounded-[20px]">
            <h2 className=""> Fill in the form below to start the process! </h2>
            <div className="grid grid-cols-6 gap-[10px] p-[10px]">
              <div className="col-span-3">
                <Textfield
                  value={firstName}
                  placeholder="Enter your first name"
                  onChange={(e: any) => setFirstName(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>

              <div className="col-span-3">
                <Textfield
                  value={lastName}
                  placeholder="Enter your last name"
                  onChange={(e: any) => setLastName(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
              <div className="col-span-3">
                <Textfield
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
              <div className="col-span-3">
                <Textfield
                  value={phoneNumber}
                  placeholder="Enter your phone number"
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
              <div className="col-span-3">
                <Textfield
                  value={suburb}
                  placeholder="Enter your suburb"
                  onChange={(e: any) => setSuburb(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-3">
                <Textfield
                  value={clientName}
                  placeholder="Name of person wanting services"
                  onChange={(e: any) => setClientName(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
              <div className="col-span-3">
                <Textfield
                  value={clientAge}
                  placeholder="Age of person wanting services"
                  onChange={(e: any) => setClientAge(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>

              <div className="col-span-6">
                <div>
                  Please select the delivery method/s you are interested in:
                </div>
                <div className="p-[10px]">
                  <Checkbox
                    value="Mobile Therapy (In-home visits)"
                    checked={deliveryMethods.includes(
                      "Mobile Therapy (In-home visits)"
                    )}
                    onChange={(e: any) => {
                      removeOrAddDeliveryMethod(e.target.value);
                    }}
                    disabled={isInputDisabled()}
                  />
                  <Checkbox
                    value="Mobile Therapy (School visits)"
                    checked={deliveryMethods.includes(
                      "Mobile Therapy (School visits)"
                    )}
                    onChange={(e: any) => {
                      removeOrAddDeliveryMethod(e.target.value);
                    }}
                    disabled={isInputDisabled()}
                  />
                  <Checkbox
                    value="Telehealth Speech Therapy (Zoom)"
                    checked={deliveryMethods.includes(
                      "Telehealth Speech Therapy (Zoom)"
                    )}
                    onChange={(e: any) => {
                      removeOrAddDeliveryMethod(e.target.value);
                    }}
                    disabled={isInputDisabled()}
                  />
                  <Checkbox
                    value="Pre-Kindy Screening"
                    checked={deliveryMethods.includes("Pre-Kindy Screening")}
                    onChange={(e: any) => {
                      removeOrAddDeliveryMethod(e.target.value);
                    }}
                    disabled={isInputDisabled()}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <textarea
                  className="bg-white p-[10px] rounded-[5px] w-full focus:outline-primary-yellow"
                  placeholder="How can we help?"
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
              <div className="col-span-6">
                <Textfield
                  value={foundOut}
                  placeholder="How did you hear about us?"
                  onChange={(e: any) => setFoundOut(e.target.value)}
                  disabled={isInputDisabled()}
                />
              </div>
            </div>
            <div className="flex justify-center">
              {!formSubmitting && (
                <Button
                  variant="action"
                  onClick={submitForm}
                  disabled={isButtonDisabled()}
                  icon={<AiOutlineFileDone />}
                >
                  {formSubmitting && "Submitting..."}
                  {!formSubmitting && "Submit"}
                </Button>
              )}
              {formSubmitting && <Loader height={40} />}
            </div>
            <div className="text-center mt-[15px]">
              <p>We offer a 10-minute introducation call to all new clients.</p>
              <p>
                We{"'"}ll discuss preference and availability and match you with
                the Speech Pathologist that best suits your child{"'"}s needs.
              </p>
            </div>
          </div>
        )}
        {formSubmitted && (
          <div className="bg-secondary-yellow flex flex-col justify-center items-center space-y-5 p-[30px] rounded-[20px] h-full">
            <i className="text-[green] text-book-session-submitted-logo">
              <BsFillCheckCircleFill />
            </i>
            <h2>Thank you for getting in contact with us!</h2>
            <h2> You will receive an email in the next couple of days.</h2>
          </div>
        )}
        {formError && (
          <div className="bg-secondary-yellow flex flex-col justify-center items-center space-y-5 p-[30px] rounded-[20px] h-full">
            <i className="text-[#ff4040] text-book-session-submitted-logo">
              <RiErrorWarningFill />
            </i>
            <h2>There was an error with submitting the form. </h2>
            <h2>Please refresh to try again!</h2>
          </div>
        )}
        <div className="flex flex-col p-[30px] h-full">
          <div className="p-[20px] pt-[0px]">
            <h2> Service Area </h2>
            <div>
              At Speak & Shine, our mobile speech therapy team is currently
              servicing Sydney and the greater Sydney region.
            </div>
            <div className="flex justify-center items-center pt-[20px]">
              <FilledImage
                src="/assets/sections/bookSession/map.jpg"
                alt=""
                height={300}
                aspectRatio={ASPECT_RATIO_BOOK_SESSION_MAP}
              />
            </div>
          </div>
          <div className="p-[20px] ">
            <h2> Contact Us </h2>
            <div className="flex flex-col space-y-6">
              <div className="flex  items-center space-x-4 p-[10px]">
                <h1>
                  <MdEmail className="text-primary-yellow" />
                </h1>
                <h1> xxxxxxx@email.com</h1>
              </div>
              <div className="flex items-center space-x-4 p-[10px]">
                <h1>
                  <MdPhone className="text-primary-yellow" />
                </h1>
                <h1> 0469 696 969</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookSession;
