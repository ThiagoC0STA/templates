'use client';

import React, { useMemo, useState } from 'react';
import { ContactFormProps } from '@/types/financial-advisor/contact';
import ArrowRightIconFive from '@/icons/ArrowRightIconFive';
import toast from 'react-hot-toast';

const ContactForm: React.FC<ContactFormProps> = ({ formContent }) => {
  const initialFormState = useMemo(() => {
    return formContent.fields.reduce<Record<string, string>>((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {});
  }, [formContent.fields]);

  const [formData, setFormData] = useState<Record<string, string>>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = formContent.fields.every(field => formData[field.name]?.trim());

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const emptyFields = formContent.fields.filter(field => !formData[field.name]?.trim());

    if (emptyFields.length > 0) {
      const fieldNames = emptyFields.map(field => field.label).join(', ');
      toast.error(`Please fill in: ${fieldNames}`);
      
      const firstEmptyField = document.getElementById(emptyFields[0].id);
      firstEmptyField?.focus();
      
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {
      console.info('Contact form submitted:', formData);
      toast.success('Message sent successfully!', { id: toastId });
      setFormData(initialFormState);
    } catch {
      toast.error('Failed to send message. Please try again.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-us-fin__form" onSubmit={handleSubmit}>
      <div className="row g-4">
        {formContent.fields.map((field) => (
          <div key={field.id} className="col-12">
            <div className="input-group">
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.name] ?? ''}
                  onChange={handleChange(field.name)}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.name] ?? ''}
                  onChange={handleChange(field.name)}
                />
              )}
            </div>
          </div>
        ))}
        <div className="col-12">
          <button 
            type="submit" 
            className="common-btn__variation9" 
            disabled={isSubmitting || !isFormValid}
            style={{ cursor: (isSubmitting || !isFormValid) ? 'not-allowed' : 'pointer' }}
          >
            {formContent.submitButton.text}
            <ArrowRightIconFive />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
