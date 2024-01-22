import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "services/ContactService";
import { resetContact } from "../../redux/slices/contactSlice";

const ContactForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: "all" });
    const contactState = useSelector(state => state.contact);
    const dispatch = useDispatch();

    useEffect(() => {
        if (contactState.messageSent) {
            reset();

            setTimeout(() => {
                dispatch(resetContact(contactState));
            }, 2000);
        }
    }, [contactState]);

    const onContactSubmit = data => {
        dispatch(createContact(data));
    };

    return (
        <form onSubmit={handleSubmit(onContactSubmit)}>
            <div className="controls row">
                <div className="col-lg-4">
                    <div className="form-group mb-30">
                        <input {...register("name", {
                            required: "Name is required"
                        })} placeholder="Name *" />
                        {errors.name && <p role="alert">{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group mb-30">
                        <input {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })} placeholder="Email *" />
                        {errors.email && <p role="alert">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group mb-30">
                        <InputMask {...register("phone", {
                            pattern: {
                                value: /^\([0-9]{3}\)-[0-9]{3}-[0-9]{4}$/i,
                                message: "Invalid phone"
                            }
                        })} mask="(999)-999-9999" placeholder="Phone" />
                        {errors.phone && <p role="alert">{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group mb-30">
                        <input {...register("subject", {
                            required: "Subject is required"
                        })} placeholder="Subject *" />
                        {errors.subject && <p role="alert">{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <textarea {...register("message", {
                            required: "Message is required"
                        })} placeholder="Message *" rows="4"></textarea>
                        {errors.message && <p role="alert">{errors.message.message}</p>}
                    </div>
                    <div className="mt-30">
                        <button type="submit">
                            <span className="text">Send A Message</span>
                        </button>
                    </div>
                    {contactState.messageSent && <span className="fz-20 fw-600 mt-30 main-color">Thank you for contacting me. See you soon!</span>}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;