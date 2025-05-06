"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzrdayr");

  if (state.succeeded) {
    return <p className="text-green-600 text-center mt-6">Thanks for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 mt-10">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="p-4 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="p-4 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="p-4 mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;