'use client';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters long',
		})
		.max(50, {
			message: 'Name must be at most 50 characters long',
		}),
	email: z.string().email({
		message: 'Please enter a valid email address',
	}),
	subject: z
		.string()
		.max(50, {
			message: 'Subject must be at most 50 characters long',
		})
		.optional(),
	message: z
		.string()
		.min(2, {
			message: 'Message must be at least 2 characters long',
		})
		.max(1000),
});

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = (data: FieldValues) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form
			className="w-full mt-10 md:mt-0 md:w-1/2 space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* Name */}
			<div className="flex flex-col gap-2">
				<label htmlFor="name">* Your name</label>
				<input
					className="rounded-lg border border-[#9F9F9F] px-6 py-4"
					placeholder="John Doe"
					{...register('name')}
				/>
				{errors.name ? (
					<p className="text-red-500">{errors.name.message as string}</p>
				) : (
					<p className="text-red-500">&nbsp;</p>
				)}
			</div>

			{/* Email */}
			<div className="flex flex-col gap-2">
				<label htmlFor="email">* Your email</label>
				<input
					className="rounded-lg border border-[#9F9F9F] px-6 py-4"
					placeholder="john.doe@gmail.com"
					{...register('email')}
				/>
				{errors.email ? (
					<p className="text-red-500">{errors.email.message as string}</p>
				) : (
					<p className="text-red-500">&nbsp;</p>
				)}
			</div>

			{/* Subject */}
			<div className="flex flex-col gap-2">
				<label htmlFor="subject">Subject</label>
				<input
					className="rounded-lg border border-[#9F9F9F] px-6 py-4"
					placeholder='e.g. "Product Inquiry"'
					{...register('subject')}
				/>
				{errors.subject ? (
					<p className="text-red-500">{errors.subject.message as string}</p>
				) : (
					<p className="text-red-500">&nbsp;</p>
				)}
			</div>

			{/* Message */}
			<div className="flex flex-col gap-2">
				<label htmlFor="message">* Your message</label>
				<textarea
					className="rounded-lg border border-[#9F9F9F] px-6 py-4"
					placeholder="Hi! I'd like to ask about"
					{...register('message')}
				/>
				{errors.message ? (
					<p className="text-red-500">{errors.message.message as string}</p>
				) : (
					<p className="text-red-500">&nbsp;</p>
				)}
			</div>

			<button
				className="rounded-md border border-[#B88E2F] bg-[#B88E2F] px-24 py-4 text-white hover:bg-white hover:text-[#B88E2F]"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;