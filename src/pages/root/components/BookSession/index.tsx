import { useState } from "react";
import Button from "src/shared/components/Button";

import { AiOutlineFileDone } from "react-icons/ai";
import Textfield from "src/shared/components/Textfield";
import Checkbox from "src/shared/components/Checkbox";
import Loader from "src/shared/components/Loader";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import FilledImage from "src/shared/components/FilledImage";
import { ASPECT_RATIOS_BOOK_SESSION_MAP } from "src/shared/helpers/aspectRatios";
import { emailRegex } from "src/shared/helpers/formValidation";
import * as fbq from "src/shared/helpers/facebookPixel";
import { AiFillInstagram } from "react-icons/ai";
import {
  featureEmailServiceDisabled,
  featureEnquiryFormDisabled,
} from "src/shared/helpers/featureFlags";

export interface IBookSessionProps {}

const BookSession = (props: IBookSessionProps) => {
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
    fetch(
      "https://formsubmit.co/ajax/admin@speakandshinespeechpathology.com.au",
      {
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
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFormSubmitting(false);
        setFormSubmitted(true);
        fbq.event("Submitted Enquiry", {});
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
        email.match(emailRegex) !== null &&
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

  const showEnquiryForm = () => {
    if (featureEnquiryFormDisabled()) return false;
    if (formSubmitted) return false;
    if (formError) return false;
    return true;
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
      <div className="flex flex-col justify-center laptop:grid laptop:grid-cols-2 w-full">
        {showEnquiryForm() && (
          <div>
            <div className="bg-secondary-yellow rounded-[20px] p-[20px]">
              <h2 className="text-center">
                Speak & Shine Speech Pathology - Enquiry Form
              </h2>
              <label className="text-[9px] flex text-center justify-center items-center">
                Note: Some symbols / characters have been disabled for security
                purposes.
              </label>
              <div className="grid grid-cols-6 gap-[10px] p-[10px]">
                <div className="col-span-3">
                  <Textfield
                    value={firstName}
                    placeholder="First name"
                    onChange={(e: any) => setFirstName(e.target.value)}
                    disabled={isInputDisabled()}
                    maxLength={35}
                  />
                </div>

                <div className="col-span-3">
                  <Textfield
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e: any) => setLastName(e.target.value)}
                    disabled={isInputDisabled()}
                    maxLength={35}
                  />
                </div>
                <div className="col-span-6 laptop:col-span-3">
                  <Textfield
                    value={email}
                    placeholder="Email address"
                    onChange={(e: any) => setEmail(e.target.value)}
                    disabled={isInputDisabled()}
                    error={
                      email.match(emailRegex) === null && email !== ""
                        ? "Please enter a valid email address"
                        : ""
                    }
                  />
                </div>
                <div className="col-span-3">
                  <Textfield
                    value={phoneNumber}
                    placeholder="Phone number"
                    onChange={(e: any) =>
                      setPhoneNumber(e.target.value.replace(/[^+\d\(\)]/gi, ""))
                    }
                    disabled={isInputDisabled()}
                  />
                </div>
                <div className="col-span-3">
                  <Textfield
                    value={suburb}
                    placeholder="Suburb"
                    onChange={(e: any) => setSuburb(e.target.value)}
                    disabled={isInputDisabled()}
                    maxLength={35}
                  />
                </div>
                <div className="col-span-3"></div>
                <div className="col-span-6 laptop:col-span-3">
                  <Textfield
                    value={clientName}
                    placeholder="Name of person wanting services"
                    onChange={(e: any) => setClientName(e.target.value)}
                    disabled={isInputDisabled()}
                    maxLength={35}
                  />
                </div>
                <div className="col-span-6 laptop:col-span-3">
                  <Textfield
                    value={clientAge}
                    placeholder="Age of person wanting services"
                    onChange={(e: any) =>
                      setClientAge(e.target.value.replace(/[^\d]/gi, ""))
                    }
                    maxLength={3}
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
                    onChange={(e) =>
                      setEnquiry(e.target.value.replace(/[\[\]\{\}\<\>]/, ""))
                    }
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
                We offer a 10-minute introducation call to all new clients. We
                {"'"}ll discuss preference and availability and match you with
                the Speech Pathologist that best suits your child{"'"}s needs.
              </div>
            </div>
          </div>
        )}
        {formSubmitted && (
          <div className="bg-secondary-yellow flex flex-col justify-center items-center space-y-5 p-[30px] rounded-[20px] h-full">
            <div className="text-[green] text-book-session-submitted-logo">
              <BsFillCheckCircleFill />
            </div>
            <h2>Thank you for getting in contact with us!</h2>
            <h2> You will receive an email in the next couple of days.</h2>
          </div>
        )}
        {formError && (
          <div className="bg-secondary-yellow flex flex-col justify-center items-center space-y-5 p-[30px] rounded-[20px] h-full">
            <div className="text-[#ff4040] text-book-session-submitted-logo">
              <RiErrorWarningFill />
            </div>
            <h2>There was an error with submitting the form. </h2>
            <h2>Please refresh to try again!</h2>
          </div>
        )}
        {!formSubmitted &&
          !formError &&
          (featureEmailServiceDisabled() || featureEnquiryFormDisabled()) && (
            <div className="flex flex-col p-[20px] h-full">
              <div className="px-[20px]">
                <h2> Speak & Shine Speech Pathology - Enquiry Form</h2>
                <br />
                <div className="bg-secondary-yellow rounded-[20px] p-[20px]">
                  Apologies, the enquiry form is currently unavailable due to
                  website maintenance. It will be available shortly.
                </div>
              </div>
            </div>
          )}
        <div className="flex flex-col p-[20px] h-full">
          <div className="px-[20px]">
            <h2> Contact Us </h2>
            <div className="flex flex-col space-y-1">
              {!featureEmailServiceDisabled() && (
                <div className="flex items-center space-x-4 p-[10px]">
                  <MdEmail className="text-primary-grey text-[16px] laptop:text-[24px]" />
                  <div className="break-all text-[16px] laptop:text-[24px]">
                    admin@speakandshinespeechpathology.com.au
                  </div>
                </div>
              )}
              <a
                className="flex items-center space-x-4 p-[10px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                href={"https://instagram.com/speakandshinespeechpathology"}
              >
                <AiFillInstagram className="text-primary-grey text-[16px] laptop:text-[24px]" />
                <div className="break-all text-[16px] laptop:text-[24px]">
                  @speakandshinespeechpathology
                </div>
              </a>
            </div>
          </div>
          <br />
          <div className="px-[20px]">
            <h2> Service Area </h2>
            <div>
              At Speak & Shine, our mobile speech therapy team is currently
              servicing Sydney and the greater Sydney region.
            </div>
            <a
              className="hidden laptop:flex justify-center items-center pt-[20px]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.google.com/?q=Marrickville&?ll=-33.9106,151.15&z=3,"
            >
              <FilledImage
                src="/assets/sections/bookSession/map.jpg"
                alt=""
                height={500}
                aspectRatio={ASPECT_RATIOS_BOOK_SESSION_MAP}
              />
            </a>
            <a
              className="flex laptop:hidden justify-center items-center pt-[20px]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.google.com/?q=Marrickville&?ll=-33.9106,151.15&z=3,"
            >
              <FilledImage
                src="/assets/sections/bookSession/map.jpg"
                alt=""
                height={250}
                aspectRatio={ASPECT_RATIOS_BOOK_SESSION_MAP}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSession;
