import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const initialContact = {
        sent: false
    };

    const [contact, setContact] = useState(initialContact);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onInputChange = (e, name) => {
        contact[name] = e.target.value;
        setContact({ ...contact });
    }

    const onContactSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onContactSubmit)}>
            <div className="controls row">
                <div className="col-lg-4">
                    <div className="form-group mb-30">
                        <input {...register("name", { required: "Name is required" })} placeholder="Name *"
                               value={contact.name}
                               onChange={e => onInputChange(e, 'name')} />
                        {errors.name && <p role="alert">{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group mb-30">
                        <input type="email" {...register("mail", { required: "Email is required" })} placeholder="Email *" />
                        {errors.mail && <p role="alert">{errors.mail.message}</p>}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-group mb-30">
                        <input {...register("phone", {
                            pattern: {
                                value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i,
                                message: "Invalid phone"
                            }
                        })} placeholder="xxx-xxx-xxxx" />
                        {errors.phone && <p role="alert">{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group mb-30">
                        <input {...register("subject", { required: "Subject is required" })} placeholder="Subject *" />
                        {errors.subject && <p role="alert">{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <textarea {...register("message", { required: "Message is required" })} placeholder="Message *" rows="4"></textarea>
                        {errors.message && <p role="alert">{errors.message.message}</p>}
                    </div>
                    <div className="mt-30">
                        <button type="submit">
                            <span className="text">Send A Message</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;