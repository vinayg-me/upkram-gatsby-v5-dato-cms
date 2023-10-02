import * as React from "react"
import { Section, Space, Text } from "../components/ui"
import * as styles from "./contact-us-form.css"
import * as footerStyles from "./footer.css"
import * as globalStyles from "./ui.css"
import { graphql, useStaticQuery } from "gatsby";
import { MapPin, Mail, PhoneCall } from "react-feather";

type FieldType = {
    label: string;
    type: 'text' | 'email' | 'textArea';
    name: string;
}

export default function ContactUsForm() {

    const data: any = useStaticQuery(graphql`
        query {
        layout {
            footer {
                emailAddress
                address
                phoneNumbers
            }
        }
        }
    `)

    const { emailAddress, address, phoneNumbers } = data.layout.footer;

    const FieldComponent = ({ label, type, name }: FieldType) => {
        return (
            <div>
                <label className={styles.FormLabel}>{label}</label>
                {type !== 'textArea' && (<input type={type} name={name} className={styles.FormInput} required />)}
                {type === 'textArea' && (<textarea name={name} className={styles.FormTextArea} />)}
            </div>
        )
    }

    return (
        <Section padding={2}>
            <div className={styles.RowContainer}>
                <div className={styles.ColContainer}>
                    <form name="Contact Form" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="Contact Form" />
                        <FieldComponent label="Name" type="text" name="name" />
                        <FieldComponent label="Email Address" type="email" name="email" />
                        <FieldComponent label="Message" type="textArea" name="message" />
                        <button type="submit" className={globalStyles.buttons['red']}>Send</button>
                    </form>
                </div>
                <div className={styles.ColContainer}>
                    <Text variant="body" className={footerStyles.FooterTitle} as="p">GET IN TOUCH</Text>
                    <Space size={4} />
                    <Text variant="small" className={footerStyles.FooterText} as="p"><MapPin size={24} className={footerStyles.FooterIcons} />{address}</Text>
                    <Space size={4} />
                    <Text variant="small" as="p" className={footerStyles.FooterText}><Mail size={24} className={footerStyles.FooterIcons} />{emailAddress}</Text>
                    <Space size={4} />
                    <Text variant="small" as="p" className={footerStyles.FooterText}><PhoneCall size={24} className={footerStyles.FooterIcons} />{phoneNumbers}</Text>
                </div>
            </div>

        </Section>
    )
}